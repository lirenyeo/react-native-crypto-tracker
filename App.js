import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import AppContainer from './src/AppContainer'
import Store from './src/Store'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const {container} = styles

export default App