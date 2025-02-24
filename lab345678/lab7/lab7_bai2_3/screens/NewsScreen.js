import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const newsData = [
  {
    id: "1",
    title: "Công nghệ AI đang thay đổi thế giới",
    description:
      "AI đang cách mạng hóa nhiều lĩnh vực như y tế, giáo dục và tài chính.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.JfwL1G9tz1HZGTtsBhRS5QHaEi&pid=Api&P=0&h=220",
  },
  {
    id: "2",
    title: "Messi giành Quả bóng vàng thứ 8",
    description:
      "Huyền thoại bóng đá tiếp tục ghi dấu ấn trong sự nghiệp của mình.",
    image: "https://i.eurosport.com/2022/12/14/3508167-71510508-2560-1440.jpg",
  },
  {
    id: "3",
    title: "Tesla ra mắt xe điện mới",
    description:
      "Mẫu xe điện mới của Tesla hứa hẹn sẽ thay đổi thị trường ô tô.",
    image:
      "https://www.motortrend.com/uploads/2023/10/LEAD-144-2024-Tesla-Model-3-RWD-Short-Range-front-three-quarter-view.jpg",
  },
];

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f5f5f5" },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: { width: "100%", height: 150 },
  textContainer: { padding: 10 },
  title: { fontSize: 16, fontWeight: "bold", color: "#333" },
  description: { fontSize: 14, color: "#666", marginTop: 5 },
});

export default NewsScreen;
