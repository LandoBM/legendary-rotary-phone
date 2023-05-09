import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import back from '../images/home-background.png'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <ImageBackground>
        <Text style={{color:'white'}}> Home Area </Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    home: {
        color: 'white'
    }
})
