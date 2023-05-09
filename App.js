import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, ImageBackground} from 'react-native';
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import back from './images/home-background.png'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={back} style={styles.background}>
      <Header />
      <Home />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
