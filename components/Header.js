import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationBar} from 'react-native-navbar'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#090b13',
        height: '10%',
        color:'white',
    }
})
