import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import React, { useEffect, useState } from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import sanityClient from "../sanityClient";
import { getDishesQuery } from "../api";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (item.dishes && item.dishes.length > 0) {
      const dishIds = item.dishes.map((dish) => dish._id);
      sanityClient
        .fetch(getDishesQuery(dishIds), { dishIds })
        .then((dishesData) => setDishes(dishesData))
        .catch((err) => console.error("Error fetching dishes: ", err));
    }
  }, [item.dishes]);

  return (
    <View
      style={{
        shadowColor: themeColors.bgColor(0.2),
        shadowRadius: 7,
      }}
      className="mr-6 bg-white rounded-3xl shadow-lg flex"
    >
<View className="flex-row justify-between items-center px-4 py-2">
  <Text className="text-lg font-bold">{item.name}</Text>
  <TouchableOpacity
    onPress={() => navigation.navigate("Restaurant", { ...item })}
    style={{ padding: 5 }}
  >
    <Text style={{ color: themeColors.text }} className="font-semibold">
      더보기
    </Text>
  </TouchableOpacity>
</View>

      <ScrollView horizontal>
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(item.image).url() }}
        ></Image>
        {dishes.map((dish, index) => (
          <Image
            key={index}
            className="h-36 w-64 rounded-t-3xl mx-2"
            source={{ uri: urlFor(dish.image).url() }}
          />
        ))}
      </ScrollView>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Restaurant", { ...item })}
      >
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/star.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} 개의 리뷰) •{" "}
                <Text className="font-semibold">
                  {item?.type?.name || "Unknown"}
                </Text>
              </Text>
            </Text>
          </View>
        </View>
        
      </TouchableWithoutFeedback>

      <View className="flex-row items-center space-x-1 ml-3 mb-3 mt-0">
        <Icon.MapPin color="gray" width="15" height="15" />
        <Text className="text-gray-700 text-xs">위치 • {item.address} </Text>
      </View>
    </View>
  );
}
