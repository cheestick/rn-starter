import React from "react";
import { Text, View } from "react-native";
import { sx } from "./home.styles";
import { sxg } from "../theme/global";

const Home = () => {
  return (
    <View style={[sxg.container, sx.container]}>
      <Text style={[sxg.titleText, sx.titleText]}>Home Screen</Text>
    </View>
  );
};

export default Home;
