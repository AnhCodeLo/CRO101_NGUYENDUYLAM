import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const techData = [
  {
    id: "1",
    title: "Apple ra mắt iPhone 15",
    description: "Sản phẩm mới của Apple với nhiều cải tiến đáng kể.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.62v-ETqT5bsB0QnlXy-SHwAAAA&pid=Api&P=0&h=220",
  },
  {
    id: "2",
    title: "ChatGPT 5 sắp ra mắt",
    description: "AI mới sẽ mang lại trải nghiệm hoàn toàn khác biệt.",
    image:
      "https://www.negociosypymes.com/wp-content/uploads/2023/03/chat-CGP-inteligencia-artificial.jpg",
  },
  {
    id: "3",
    title: "Google phát triển xe tự lái thế hệ mới",
    description: "Xe tự lái sẽ trở nên an toàn và thông minh hơn.",
    image:
      "https://image.bnews.vn/MediaUpload/Org/2023/12/29/byd-20231229094303.jpg",
  },
];

const TechScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={techData}
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

export default TechScreen;
