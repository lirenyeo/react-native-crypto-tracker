import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SettingContainer } from '../../containers'
import Color from '../../constants/Color'

const SettingScene = ({navigation}) => (
  <View style={container}>
    <SettingContainer navigation={navigation}/>
  </View>
)

const {
  container
} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryDark,
  }
})

export default SettingScene