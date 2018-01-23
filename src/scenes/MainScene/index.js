import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../../components'
import { CryptoContainer } from '../../containers'
import Color from '../../constants/Color'

const MainScene = () => (
  <View style={{flex: 1, backgroundColor: Color.primaryDark}}>
    <CryptoContainer />
  </View>
)

export default MainScene