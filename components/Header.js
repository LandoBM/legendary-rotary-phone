import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { NavigationBar} from 'react-native-navbar'
// import { LinearGradient } from 'expo-linear-gradient'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        {/* <Text style={styles.text}>Disney</Text> */}
        <Image style={styles.logo} source = {require ('../images/disLogo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#090b30',
        height: '10%',
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
