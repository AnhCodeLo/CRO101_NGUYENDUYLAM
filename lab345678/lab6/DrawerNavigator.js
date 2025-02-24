import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../lab6/ProfileScreen";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const PlaceholderScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 18 }}>{route.name} Screen</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#4A90E2" },
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: "#4A90E2",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Article"
          component={PlaceholderScreen}
          options={{
            title: "Article",
            drawerIcon: ({ color, size }) => (
              <Icon name="file-text" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={PlaceholderScreen}
          options={{
            title: "Chat",
            drawerIcon: ({ color, size }) => (
              <Icon name="comments" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={PlaceholderScreen}
          options={{
            title: "Setting",
            drawerIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Help"
          component={PlaceholderScreen}
          options={{
            title: "Help",
            drawerIcon: ({ color, size }) => (
              <Icon name="question-circle" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
