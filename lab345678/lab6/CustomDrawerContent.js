import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {}
      <LinearGradient colors={["#FFEDB7", "#FFB9EA"]} style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/fuNh1h5.png" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyễn Duy Lâm</Text>
        <Text style={styles.email}>lamnd@gmail.com</Text>
      </LinearGradient>

      {}
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {}
      <View style={styles.footer}>
        <Text style={styles.version}>Phiên bản ứng dụng: 2.6.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    top: 50,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    padding: 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  version: {
    fontSize: 14,
    color: "#666",
  },
});

export default CustomDrawerContent;
