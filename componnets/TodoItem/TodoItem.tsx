import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { sx } from "./TodoItem.styles";

type Props = {
  todo: Todo;
  onRemove: (id: TodoId) => void;
};

export default function TodoItem({ todo, onRemove }: Props) {
  const { text, id } = todo;
  return (
    <TouchableOpacity onPress={() => onRemove(id)}>
      <Text style={sx.text}>{text}</Text>
    </TouchableOpacity>
  );
}
