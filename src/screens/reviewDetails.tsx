import React from "react";
import { Text, View, Button } from "react-native";
import { sx } from "./reviewDetails.styles";
import { sxg } from "../theme/global";

// FIXME: any type
const ReviewDetails = ({ navigation }: any) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={[sxg.container, sx.container]}>
      <Text style={[sxg.titleText, sx.text]}>ReviewDetails Screen</Text>
      <Button title="Back to Home" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
