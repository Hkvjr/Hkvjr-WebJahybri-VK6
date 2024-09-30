import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FactDisplay = ({ fact }) => (
  <View style={styles.container}>
    <Text style={styles.fact}>{fact}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  fact: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FactDisplay;
