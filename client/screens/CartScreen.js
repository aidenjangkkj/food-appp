import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeToCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { urlFor } from '../sanity';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const deliveryFee = 2
    const dispatch = useDispatch();

    useEffect(()=>{
      const items = cartItems.reduce((group, item) => {
        if(group[item.id]){
          group[item.id].push(item);
        }
        else{
          group[item.id] = [item];
        }
        return group;
      },{})
      setGroupedItems(items)
    },[cartItems])
  return (
    <View className='bg-white flex-1'>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className='absolute z-10 rounded-full shadow top-5 left-2'>
            <Icon.ArrowLeft strokeWidth={3} stroke={'white'}></Icon.ArrowLeft>
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your Cart</Text>
          <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>
      </View>
      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
      className='flex-row px-4 items-center'>
        <Image source={require('../assets/images/bikeguy.png')} className='w-20 h-20 mr-5'></Image>
        <Text className='flex-1 pl-4 ml-5'>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className='font-bold' style={{color: themeColors.text}}>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50
      }}
      className='bg-white pt-5'
      >
        {
          Object.entries(groupedItems).map(([key,items]) => {
            let dish = items[0];
            return(
              <View key={key}
              className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                <Text className='font-bold' style={{color:themeColors.text}}>{items.length} 개</Text>
                <Image className='h-14 w-14 rounded-full ml-3' source={{uri: urlFor(dish.image).url()}}></Image>
                <Text className='flex-1 font-bold text-gray-700 ml-3'>{dish.name}</Text>
                <Text className='font-semibold text-base'>${dish.price}</Text>
                <TouchableOpacity
                className='p-1 rounded-full ml-3'
                onPress={()=> dispatch(removeToCart({id: dish.id}))}
                style={{backgroundColor: themeColors.bgColor(1)}}>
                  <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}></Icon.Minus>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      <View className='p-6 px-8 rounded-t-3xl space-y-4' style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className='flex-row justify-between mb-4'>
          <Text className='text-gray-700'>Subtotal</Text>
          <Text className='text-gray-700'>${cartTotal}</Text>
        </View>
        <View className='flex-row justify-between mb-4'>
          <Text className='text-gray-700'>Delivery Fee</Text>
          <Text className='text-gray-700'>${deliveryFee}</Text>
        </View>
        <View className='flex-row justify-between mb-4'>
          <Text className='text-gray-700 font-extrabold'>Order Total</Text>
          <Text className='text-gray-700 font-extrabold'>${deliveryFee+cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={()=> navigation.navigate('OrderPreparing')}
          style={{backgroundColor:themeColors.bgColor(1)}}
          className='p-4 rounded-full'>
            <Text className='text-white text-center font-bold text-lg'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}