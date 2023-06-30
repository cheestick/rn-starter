import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { sx } from "./App.styles";

export default function App() {
  return (
    <View style={sx.container}>
      <Text>Happy coding!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
