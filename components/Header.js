import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground} from 'react-native'
import { NavigationBar} from 'react-native-navbar'
// import { LinearGradient } from 'expo-linear-gradient'


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logo} source = {require ('../images/disLogo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        color:'white',
    },

    text: {
        color:'white',
        position: 'absolute',
        top: '50%',
        left: '40%',
        fontSize: 25
    },

    logo: {
        position: 'absolute',
        width: 100,
        height: 60,
        resizeMode: 'stretch',
        top: '20%',
        left: '37%'
    }

})
