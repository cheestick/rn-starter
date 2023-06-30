import { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";
import { sx } from "./AddTodo.styles";
import { theme } from "../../appearance";

type Props = {
  onSubmit: (text: string) => void;
};

export default function AddTodo({ onSubmit }: Props) {
  const [text, setText] = useState("");

  const changeHandler = (value: string) => {
    setText(value);
  };

  const clearText = () => setText("");

  const onAddTodo = () => {
    onSubmit(text);
    clearText();
  };

  return (
    <View style={sx.form}>
      <TextInput
        style={sx.input}
        placeholder="new todo..."
        autoCorrect
        clearButtonMode="while-editing"
        onChangeText={changeHandler}
        value={text}
      />
      <View style={sx.button}>
        <Button
          onPress={onAddTodo}
          title="Add"
          color={theme.color.text.light}
        />
      </View>
    </View>
  );
}
