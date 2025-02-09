import React, { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  StatusBar,
  Text,
} from "react-native";
import styles from "./styles";

const StatusBarChanger = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState("#6200ea");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setStatusBarColor(statusBarColor === "#6200ea" ? "#03dac6" : "#6200ea");
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [statusBarColor]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.text}>Kéo xuống để thay đổi màu StatusBar</Text>
      </ScrollView>
    </View>
  );
};

export default StatusBarChanger;
