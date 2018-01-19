import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../../components'
import { CryptoContainer } from '../../containers'

const MainScene = () => (
  <View>
    <Header />
    <CryptoContainer />
  </View>
)

export default MainScene