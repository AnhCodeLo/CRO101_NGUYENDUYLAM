import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const sportsData = [
  {
    id: "1",
    title: "Ronaldo lập hat-trick cho Al Nassr",
    description: "Siêu sao Bồ Đào Nha tiếp tục tỏa sáng với cú hat-trick.",
    image:
      "https://cnnespanol.cnn.com/wp-content/uploads/2023/01/230105171139-cristiano-ronaldo-al-nassr-teamates-thumbs-up-getty-images-full-169.jpg?quality=100&strip=info",
  },
  {
    id: "2",
    title: "Đội tuyển Việt Nam chuẩn bị cho vòng loại World Cup",
    description: "HLV Troussier công bố danh sách cầu thủ tham dự.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ii3jGz-IMs9mzQIyFZs4YAHaEK&pid=Api&P=0&h=220",
  },
  {
    id: "3",
    title: "NBA mùa giải mới bắt đầu",
    description: "Các đội bóng hàng đầu đã sẵn sàng cho cuộc đua vô địch.",
    image: "https://cdn.mos.cms.futurecdn.net/ybVrFNa2SYBRRq7Cz6DZxZ.jpeg",
  },
];

const SportsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sportsData}
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

export default SportsScreen;
