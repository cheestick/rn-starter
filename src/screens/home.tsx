import React from "react";
import { Text, View, Button } from "react-native";
import { sx } from "./home.styles";
import { sxg } from "../theme/global";

// FIXME: any type
const Home = ({ navigation }: any) => {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={[sxg.container, sx.container]}>
      <Text style={[sxg.titleText, sx.titleText]}>Home Screen</Text>
      <Button title="Review Details" onPress={pressHandler} />
    </View>
  );
};

export default Home;
