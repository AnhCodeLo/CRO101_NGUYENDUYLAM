import React from "react";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { validPlayers, topScorer, totalGoals } from "@/scripts/players"; // Đảm bảo đường dẫn đúng tới tệp players.js

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nguyễn Duy Lâm PD!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Thêm đoạn mã hiển thị thông tin cầu thủ */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.whiteText}>
          Danh sách cầu thủ hợp lệ
        </ThemedText>
        {validPlayers.map((player, index) => (
          <Text key={index} style={styles.whiteText}>
            {player.name}: {player.goals} goals
          </Text>
        ))}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.whiteText}>
          Cầu thủ ghi nhiều bàn thắng nhất
        </ThemedText>
        <Text style={styles.whiteText}>
          {topScorer.name} với {topScorer.goals} bàn thắng
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.whiteText}>
          Tổng số bàn thắng của các cầu thủ hợp lệ
        </ThemedText>
        <Text style={styles.whiteText}>{totalGoals}</Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  whiteText: {
    color: "white",
  },
});
