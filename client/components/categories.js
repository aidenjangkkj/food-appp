import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
    })
  }, []);
  
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? 'bg-gray-600 ' : 'bg-gray-200 ';
          let textClass = isActive ? 'font-semibold text-gray-800 ' : 'text-gray-500 ';
          
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(category._id);  // 활성화된 카테고리 업데이트
                  onCategorySelect(category._id);  // 부모에게 카테고리 ID 전달
                }}
                className={"p-1 rounded-full shadow bg-gray-200 " + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
