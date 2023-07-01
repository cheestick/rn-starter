import { useFonts } from "expo-font";
import Home from "./src/screens/home";
import { ActivityIndicator } from "react-native";
import Navigator from "./src/routes/homeStack";

const fonts = {
  "nunito-regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
  "nunito-semibold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (fontsLoaded) {
    return <Navigator />;
  }

  return <ActivityIndicator />;
}
