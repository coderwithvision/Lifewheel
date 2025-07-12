import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LifeAreaItem({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
  },
});