import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => (
  <View style={headerContainer}>
    <Text style={header}>
      Crypto Tracker Live
    </Text>
  </View>
)

const {
  headerContainer,
  header
} = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#009999',
    fontSize: 20,
  }
})

export default Header
