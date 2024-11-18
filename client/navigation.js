import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import { View, Text } from "react-native";
import React from "react";
import RestaurantScreen from "./screens/RestaurantScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{presentation: 'fullScreenModal'}}></Stack.Screen>
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
        ></Stack.Screen>
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen}></Stack.Screen>
        <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen}></Stack.Screen>
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
