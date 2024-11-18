import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Dishrow from "../components/dishrow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { urlFor } from "../sanity";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(item && item._id){
      dispatch(setRestaurant({...item}))
    }
  },[])

  // item.dishes가 배열인지 확인 후, 없으면 빈 배열 반환
  const dishes = Array.isArray(item.dishes) ? item.dishes : [];

  return (
    <View>
      <CartIcon></CartIcon>
      <StatusBar style='light'></StatusBar>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={{uri: urlFor(item.image).url}}></Image>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft
              strokeWidth={3}
              stroke={themeColors.bgColor(1)}
            ></Icon.ArrowLeft>
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold ml-5">{item.name}</Text>
            <View className="flex-row space-x-2 my-1 ml-5">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/star.png")}
                  className="h-4 w-4"
                ></Image>
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} 개의 리뷰) • {" "}
                    <Text className="font-semibold">{item?.type?.name}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-between space-x-1 ml-4">
                <Icon.MapPin color="gray" width="15" height="15"></Icon.MapPin>
                <Text className="text-gray-700 text-xs">
                  위치 • {item.address}{" "}
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 ml-6'>{item.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold ml-6'>Menu</Text>
          {/* 메뉴가 존재할 경우만 출력 */}
          {
            dishes.length > 0 ? (
              dishes.map((dish, index) => (
                <Dishrow item={{ ...dish }} key={index}></Dishrow>
              ))
            ) : (
              <Text className="text-center text-gray-500">메뉴가 없습니다.</Text>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
}
