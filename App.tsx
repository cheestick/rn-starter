import { useState } from "react";
import { Text, SafeAreaView, View, FlatList, StatusBar } from "react-native";
import { sx } from "./App.styles";
import { todosMock } from "./mock/todos";
import Header from "./componnets/Header/Header";

export default function App() {
  const [todos, setTodos] = useState(todosMock);
  return (
    <View style={sx.container}>
      <Header />
      <View style={sx.content}>
        {/* to form */}
        <View style={sx.list}>
          <FlatList
            keyExtractor={(todo) => todo.id}
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}
