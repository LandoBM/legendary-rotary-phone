import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native';
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
