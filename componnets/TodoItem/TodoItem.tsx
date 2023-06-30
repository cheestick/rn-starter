import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { sx } from "./TodoItem.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../appearance";

type Props = {
  todo: Todo;
  onRemove: (id: TodoId) => void;
};

export default function TodoItem({ todo, onRemove }: Props) {
  const { text, id } = todo;
  return (
    <TouchableOpacity onPress={() => onRemove(id)}>
      <View style={sx.item}>
        <MaterialIcons name="delete" size={24} color={theme.color.bg.dark} />
        <Text style={sx.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
