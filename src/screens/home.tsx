import React from "react";
import { Text, View } from "react-native";
import { sx } from "./home.styles";

const Home = () => {
  return (
    <View style={sx.container}>
      <Text style={sx.text}>Home Screen</Text>
    </View>
  );
};

export default Home;
