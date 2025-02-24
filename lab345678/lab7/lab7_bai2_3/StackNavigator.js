import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopTabs from "./TopTabs";
import ProfileScreen from "./screens/ProfileScreen"; // Thêm ProfileScreen

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopTabs"
        component={TopTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Thông Tin Cá Nhân" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
