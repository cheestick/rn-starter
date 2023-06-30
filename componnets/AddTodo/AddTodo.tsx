import { useState } from "react";
import { TextInput, Button, Text, View, Alert, Keyboard } from "react-native";
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
    if (text.trim().length < 4) {
      Alert.alert("Oops!", "Todos must be over 3 chars long.", [
        {
          text: "Got it",
          onPress: () => {},
        },
      ]);
      return;
    }

    onSubmit(text);
    clearText();
    Keyboard.dismiss();
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
