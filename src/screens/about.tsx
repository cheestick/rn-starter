import React from "react";
import { Text, View } from "react-native";
import { sx } from "./about.styles";

const About = () => {
  return (
    <View style={sx.container}>
      <Text style={sx.text}>About Screen</Text>
    </View>
  );
};

export default About;
