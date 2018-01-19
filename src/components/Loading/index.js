import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Loading extends Component {
  render() {
    return (
      <View style={container}>
        <ActivityIndicator size="large" color="#009999" />
      </View>
    )
  }
}

const {container} = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})


export default Loading