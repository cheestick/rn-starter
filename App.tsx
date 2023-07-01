import { useState } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { sx } from "./App.styles";
import Home from "./src/screens/home";
import { ActivityIndicator } from "react-native";

const fonts = {
  "nunito-regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
  "nunito-semibold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (fontsLoaded) {
    return <Home />;
  }

  return <ActivityIndicator />;
}
