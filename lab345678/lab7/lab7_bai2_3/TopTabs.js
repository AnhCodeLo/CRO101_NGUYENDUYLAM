import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import NewsScreen from "./screens/NewsScreen"; // Đảm bảo đường dẫn đúng
import SportsScreen from "./screens/SportsScreen";
import TechScreen from "./screens/TechScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#EC572E" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#bbb",
        tabBarIndicatorStyle: { backgroundColor: "white", height: 3 },
      }}
    >
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
      <Tab.Screen name="Tech" component={TechScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", color: "white", marginTop: 10 },
});

export default TopTabs;
