import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class TabA extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Buttons',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Buttons are here... </Text>
      </View>
      )
  }
}

export default TabA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
