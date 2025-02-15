import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Lab5 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      {/* Ảnh nền */}
      <ImageBackground
        source={require("./images/travel.png")}
        style={styles.image}
      >
        {/* View chứa nội dung text & button, căn giữa ảnh */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Khám phá thế giới</Text>
          <Text style={styles.subtitle}>
            Cùng chúng tôi trải nghiệm những hành trình đáng nhớ
          </Text>

          {/* Nút Get Started */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// Định nghĩa styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // Căn giữa nội dung theo chiều dọc
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)", // Làm tối nền giúp text dễ đọc
    padding: 20,
    borderRadius: 10,
    alignItems: "center", // Căn giữa text và button
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Lab5;
