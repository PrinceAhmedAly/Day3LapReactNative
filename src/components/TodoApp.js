import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from 'react-native-paper';

import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() === '') {
      return;
    }
    setTodos(prevTodos => [
      ...prevTodos,
      { id: uuidv4(), text: todoText, completed: false },
    ]);
    setTodoText('');
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Todo"
          value={todoText}
          onChangeText={setTodoText}
          style={styles.input}
          placeholderTextColor="#ddd"
        />
        <IconButton
          icon="plus"
          color="black"
          size={30}
          onPress={addTodo}
          style={styles.addButton}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#888',
    paddingVertical: 5,
    color: '#fff',
  },
  addButton: {
    marginLeft: 10,
  },
});

export default TodoApp;
