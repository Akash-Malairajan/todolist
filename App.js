import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); // Initialize as an empty string

  const handleAddTodo = () => {
    if (newTodo.length === 0) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <ImageBackground
      source={{ uri: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=960", }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add Text Enter"
            value={newTodo}
            onChangeText={(text) => setNewTodo(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {todos.map((todo, index) => (
          <TouchableOpacity
            key={index}
            style={styles.todoContainer}
            onPress={() => handleDeleteTodo(index)}
          >
            <Text style={styles.todo}>{todo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    animationName: "backgroundAnimation",
    animationDuration: "10s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  todoContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
