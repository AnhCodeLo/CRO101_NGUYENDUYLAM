import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Ảnh đại diện */}
      <Image
        source={{
          uri: "https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male-1024.png",
        }}
        style={styles.avatar}
      />

      {/* Thông tin cá nhân */}
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.info}>📧 lamndpd11169@gmail.com</Text>
      <Text style={styles.info}>📞 +84 123 456 789</Text>

      {/* Nút chỉnh sửa */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#6200EE",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
