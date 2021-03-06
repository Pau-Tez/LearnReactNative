import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'


const items = [
  { name: 'Buttons'}
]

class ItemList extends Component {

  static navigationOptions = {
    title: 'Stack'
  }

  renderItem = (item, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => this.props.navigation.navigate( item.name )}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>)
  }

  render () {
    return (
      <View style={styles.container}>
        {items.map(this.renderItem)}
      </View>
      )
  }
}

export default ItemList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  item: {
    padding: 50,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  }
})
