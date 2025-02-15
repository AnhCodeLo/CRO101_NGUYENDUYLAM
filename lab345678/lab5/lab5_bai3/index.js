import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const HoiAnScreen = () => {
  return (
    <View style={styles.container}>
      {/* Ảnh nền chứa toàn bộ nội dung */}
      <ImageBackground
        source={require("../lab5_bai3/hoian.png")} // Đổi thành ảnh của bạn
        style={styles.imageBackground}
      >
        {/* Lớp phủ để làm mờ ảnh giúp text dễ đọc */}
        <View style={styles.overlay}>
          {/* Tiêu đề và đánh giá */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={20} color="#FFD700" />
              <Text style={styles.ratingText}>5.0</Text>
            </View>

            {/* Nút yêu thích */}
            <TouchableOpacity style={styles.favoriteButton}>
              <FontAwesome name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Phần chi tiết */}
          <View style={styles.detailsContainer}>
            {/* Địa điểm */}
            <View style={styles.locationRow}>
              <MaterialIcons name="place" size={18} color="#007AFF" />
              <Text style={styles.locationText}>Quảng Nam</Text>
            </View>

            {/* Thông tin chuyến đi */}
            <Text style={styles.infoTitle}>Thông tin chuyến đi</Text>
            <Text style={styles.description}>
              Hội An là một thành phố thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội
              An từng là một thương cảng quốc tế sầm uất, với những di sản kiến
              trúc đã có từ hàng trăm năm trước...
            </Text>

            {/* Giá và nút đặt ngay */}
            {/* Bọc bookingRow trong một View có background */}
            {/* Phần giá và nút đặt ngay */}
            <View style={styles.bookingContainer}>
              <Text style={styles.price}>
                $100 <Text style={styles.perDay}>/Ngày</Text>
              </Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Đặt ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Đẩy nội dung xuống
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)", // Làm mờ nền giúp text dễ đọc
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: "58%", // Điều chỉnh cao hơn
    left: 40,
    zIndex: 2, // Đảm bảo hiển thị trên ảnh
  },
  favoriteButton: {
    position: "absolute",
    right: 20,
    top: 20, // Sử dụng giá trị số thay vì "%"
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    elevation: 5, // Đổ bóng
    zIndex: 2, // Đảm bảo nút nằm trên các phần khác
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
  },
  favoriteButton: {
    position: "absolute",
    right: 20,
    top: 50,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    elevation: 5, // Đổ bóng
  },
  detailsContainer: {
    backgroundColor: "rgba(255,255,255,0.9)", // Làm mờ nền trắng
    padding: 20,
    borderRadius: 15,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  bookingContainer: {
    backgroundColor: "#0057B7", // Màu xanh đậm
    flexDirection: "row", // Hiển thị ngang
    justifyContent: "space-between", // Căn hai đầu
    alignItems: "center", // Căn giữa theo chiều dọc
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15, // Bo góc
    marginTop: 20,
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  perDay: {
    fontSize: 14,
    fontWeight: "normal",
  },
  bookButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bookButtonText: {
    color: "#0057B7",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HoiAnScreen;
