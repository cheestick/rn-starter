import React from "react";
import { Text, View } from "react-native";
import { sx } from "./reviewDetails.styles";

const ReviewDetails = () => {
  return (
    <View style={sx.container}>
      <Text style={sx.text}>ReviewDetails Screen</Text>
    </View>
  );
};

export default ReviewDetails;
