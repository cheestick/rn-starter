import React from "react";
import { View, Text } from "react-native";
import { sx } from "./Header.styles";

export default function Header() {
  return (
    <View style={sx.header}>
      <Text style={sx.title}>My Todos</Text>
    </View>
  );
}
