import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏡 Home</Text>
      <Text style={styles.text}>Xin chào! Đây là màn hình Home</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn..."
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detail", { userName: name })}
      >
        <Text style={styles.buttonText}>Chuyển sang Chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  drawerButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4A90E2",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
