import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper'; 

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggleComplete(todo.id)} style={styles.textContainer}>
        <Text style={[styles.text, todo.completed && styles.completed]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <IconButton
        icon="delete"
        color="#FFF"
        size={20}
        onPress={() => onDelete(todo.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
