import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../../components'
import { CryptoContainer } from '../../containers'

const MainScene = () => (
  <View style={{flex: 1}}>
    <Header />
    <CryptoContainer />
  </View>
)

export default MainScene