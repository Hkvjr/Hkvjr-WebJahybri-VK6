import React from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import useFetch from './hooks/useFetch';
import FactDisplay from './components/FactDisplay';
import styles from './styles';

export default function App() {
  const apiKey = 'YOUR_API_KEY'; 
  const url = 'https://api.api-ninjas.com/v1/facts'
  const { data: fact, loading, error, fetchData } = useFetch(url, apiKey);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Facts</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text> // Virheviesti
      ) : (
        <FactDisplay fact={fact} />
      )}
      <Button title="Get new fact" onPress={fetchData} />
    </View>
  );
}
