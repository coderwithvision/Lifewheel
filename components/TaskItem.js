import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TaskItem({ task, onToggle }) {
  return (
    <Pressable onPress={() => onToggle(task.id)}>
      <View style={styles.task}>
        <Text style={[styles.text, task.done && styles.done]}>
          {task.title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  text: {
    fontSize: 18
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'gray'
  }
});