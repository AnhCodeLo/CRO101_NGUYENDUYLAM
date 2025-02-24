// App.js
import React from "react";
import Lab3_Bai1 from "./lab3/lab3_bai1_2";
import Lab3_Bai3 from "./lab3/lab3_bai3";
import Lab3 from "./lab3";
import ContactList from "./lab4";
import Lab4_Bai2 from "./lab4/lab4_bai2";
import Lab4_Bai3 from "./lab4/lab4_bai3";
import Lab5_Bai1 from "./lab5/lab5_bai1";
import Lab5_Bai2 from "./lab5/lab5_bai2";
import Lab5_Bai3 from "./lab5/lab5_bai3";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./lab6/DrawerNavigator";
import Lab7_Bai1 from "./lab7/lab7_bai1";
import Lab7_Bai2_3 from "./lab7/lab7_bai2_3/BottomTabs";
import NewsScreen from "./lab7/lab7_bai2_3/screens/NewsScreen";
import { enableScreens } from "react-native-screens";
enableScreens(false);

const App = () => {
  return (
    <NavigationContainer>
      <Lab7_Bai2_3 />
    </NavigationContainer>
  );
};

export default App;
