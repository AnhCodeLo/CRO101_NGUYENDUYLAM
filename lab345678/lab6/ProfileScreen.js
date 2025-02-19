import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Hồ Sơ</Text>
      <Text style={styles.text}>Đây là màn hình Hồ Sơ của bạn.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5e1",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF8C00",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
});

export default ProfileScreen;
