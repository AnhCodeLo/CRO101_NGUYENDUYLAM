import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Text, View } from "react-native";

// Import fonts
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { GrechenFuemen_400Regular } from "@expo-google-fonts/grechen-fuemen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_Regular: Inter_400Regular,
    Inter_Bold: Inter_700Bold,
    GrechenFuemen: GrechenFuemen_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "GrechenFuemen", fontSize: 18 }}>
        Xin chào đây phông được thay đổi!
      </Text>
      <Text style={{ fontFamily: "Inter_Bold", fontSize: 20 }}>
        React Native
      </Text>
    </View>
  );
}
