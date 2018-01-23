import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => (
  <View style={headerContainer}>
    <Text style={header}>
      <Ionicons name="md-sync" size={20} color="#009999" /> Crypto Tracker Live
    </Text>
  </View>
)

const {
  headerContainer,
  header
} = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#009999',
    fontSize: 20,
  }
})

export default Header
