import React from "react";
import { Text, View } from "react-native";
import { sx } from "./reviewDetails.styles";
import { sxg } from "../theme/global";

const ReviewDetails = () => {
  return (
    <View style={[sxg.container, sx.container]}>
      <Text style={[sxg.titleText, sx.text]}>ReviewDetails Screen</Text>
    </View>
  );
};

export default ReviewDetails;
