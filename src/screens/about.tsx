import React from "react";
import { Text, View } from "react-native";
import { sx } from "./about.styles";
import { sxg } from "../theme/global";

const About = () => {
  return (
    <View style={[sxg.container, sx.container]}>
      <Text style={[sxg.titleText, sx.text]}>About Screen</Text>
    </View>
  );
};

export default About;
