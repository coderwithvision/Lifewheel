import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LifeAreaItem from './components/LifeAreaItem';

export default function App() {
  const [lifeAreas, setLifeAreas] = useState([]);
  const [newArea, setNewArea] = useState('');

  useEffect(() => {
    const loadAreas = async () => {
      const stored = await AsyncStorage.getItem('lifeAreas');
      if (stored) setLifeAreas(JSON.parse(stored));
    };
    loadAreas();
  }, []);

  const addLifeArea = async () => {
    if (!newArea.trim()) return;
    const updated = [...lifeAreas, { id: Date.now().toString(), title: newArea }];
    setLifeAreas(updated);
    await AsyncStorage.setItem('lifeAreas', JSON.stringify(updated));
    setNewArea('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Areas</Text>
      <TextInput
        placeholder="Enter life area"
        value={newArea}
        onChangeText={setNewArea}
        style={styles.input}
      />
      <Button title="Add Life Area" onPress={addLifeArea} />
      <FlatList
        data={lifeAreas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LifeAreaItem title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5,
  },
});