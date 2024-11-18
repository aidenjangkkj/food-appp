import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import RestaurantCard from './restaurantCard';

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
      </View>
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5 px-5"
      >
        {/* 조건부 렌더링: restaurants가 배열이고, 그 길이가 0보다 큰지 확인 */}
        {Array.isArray(restaurants) && restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => {
            return <RestaurantCard item={restaurant} key={index} />;
          })
        ) : (
          // restaurants가 없거나 비어 있을 경우 대체 메시지 출력
          <Text className="text-center text-gray-500">
            해당 카테고리에 음식점이 없습니다.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
