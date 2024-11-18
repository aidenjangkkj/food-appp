import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { getRestaurantsByCategoryId } from "../api";

export default function HomeScreen() {
  const [categoryRestaurants, setCategoryRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    if (selectedCategory) {
      getRestaurantsByCategoryId(selectedCategory).then((data) => {
        setCategoryRestaurants(data);
      });
    }
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredRestaurants = categoryRestaurants
    .map((category) => {
      const filtered = category.restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        return {
          ...category,
          restaurants: filtered,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"></StatusBar>
      {/* 검색바 */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="음식점"
            className="ml-2 flex-1"
            value={searchTerm} // 검색어 상태 바인딩
            onChangeText={setSearchTerm} // 검색어 상태 업데이트
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">한국</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="mx-3 p-3 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>
      {/* 메인 */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* 카테고리 */}
        <Categories onCategorySelect={handleCategorySelect}></Categories>

        {/* 검색된 음식점 리스트 */}
        <View className="mt-5">
          {
            // 필터링된 카테고리와 음식점들을 출력
            filteredRestaurants.map((category, index) => (
              <FeaturedRow
                key={index}
                title={category.name}
                restaurants={category.restaurants} // 필터링된 음식점만 넘겨줌
                description={category.description}
              />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
