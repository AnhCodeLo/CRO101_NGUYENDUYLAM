import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={24} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://timviec365.vn/pictures/images_10_2020/banner-la-gi-2(1).jpg",
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>Khám phá nội dung thú vị!</Text>
        </View>

        {/* Danh mục */}
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="newspaper-outline" size={35} color="#4A90E2" />
            <Text style={styles.categoryText}>Tin tức</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="football-outline" size={35} color="#4A90E2" />
            <Text style={styles.categoryText}>Thể thao</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="laptop-outline" size={35} color="#4A90E2" />
            <Text style={styles.categoryText}>Công nghệ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="game-controller-outline" size={35} color="#4A90E2" />
            <Text style={styles.categoryText}>Giải trí</Text>
          </TouchableOpacity>
        </View>

        {/* Danh sách nổi bật */}
        <Text style={styles.sectionTitle}>Nội dung nổi bật</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featuredItem}>
            <Image
              source={{
                uri: "https://didongviet.vn/dchannel/wp-content/uploads/2022/11/loi-ich-cua-mang-xa-hoi-didongviet-cover.jpg",
              }}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>Tin nóng hổi hôm nay</Text>
          </View>

          <View style={styles.featuredItem}>
            <Image
              source={{
                uri: "https://i.ytimg.com/vi/zlVmfvHljsM/maxresdefault.jpg",
              }}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>Trận đấu kịch tính</Text>
          </View>

          <View style={styles.featuredItem}>
            <Image
              source={{
                uri: "https://source.unsplash.com/300x200/?technology",
              }}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>Xu hướng công nghệ 2024</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  // Thanh tìm kiếm
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },

  // Banner
  bannerContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 180,
  },
  bannerText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },

  // Danh mục
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryItem: {
    width: "48%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  // Nội dung nổi bật
  featuredItem: {
    width: 200,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#fff",
  },
  featuredImage: {
    width: "100%",
    height: 120,
  },
  featuredText: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
