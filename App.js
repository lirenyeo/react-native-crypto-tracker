import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import Store from './src/Store'
import { MainScene } from './src/scenes'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <MainScene />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#dadada',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

const {container} = styles

export default App