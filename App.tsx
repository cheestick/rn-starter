import { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { sx } from "./App.styles";
import { todosMock } from "./mock/todos";
import Header from "./componnets/Header/Header";
import TodoItem from "./componnets/TodoItem/TodoItem";
import AddTodo from "./componnets/AddTodo/AddTodo";

export default function App() {
  const [todos, setTodos] = useState(todosMock);

  const pressHandler = (key: TodoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== key));
  };

  const submitHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={(f) => Keyboard.dismiss()}>
      <View style={sx.container}>
        <Header />
        <View style={sx.content}>
          <AddTodo onSubmit={submitHandler} />
          <View style={sx.list}>
            <FlatList
              keyExtractor={(todo) => todo.id}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem todo={item} onRemove={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
