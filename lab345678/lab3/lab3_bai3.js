import React, { useState, useEffect } from "react";
import { Text, View, Modal, Button, Alert, BackHandler } from "react-native";
import stylesBai3 from "./stylesBai3"; // Import styles từ file stylesBai3.js

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (modalVisible) {
        Alert.alert(
          "Thông báo",
          "Bạn đã tắt modal bằng nút back của thiết bị",
          [{ text: "OK", onPress: () => setModalVisible(false) }]
        );
        return true; // Chặn hành động back mặc định
      }
      return false; // Cho phép hành động back mặc định nếu modal không mở
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Dọn dẹp sự kiện khi component unmount
  }, [modalVisible]);

  return (
    <View style={stylesBai3.container}>
      <Button
        title="Hiển thị Modal"
        onPress={() => setModalVisible(true)}
        color="blue"
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert(
            "Thông báo",
            "Bạn đã tắt modal bằng nút back của thiết bị",
            [{ text: "OK", onPress: () => setModalVisible(false) }]
          );
        }}
      >
        <View style={stylesBai3.modalOverlay}>
          <View style={stylesBai3.modalContent}>
            <Text style={stylesBai3.modalText}>Đây là nội dung của Modal</Text>
            <Button
              title="Ẩn Modal"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
