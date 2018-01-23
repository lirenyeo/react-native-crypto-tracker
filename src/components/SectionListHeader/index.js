import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Color from '../../constants/Color'

const SectionListHeader = ({children}) => (
  <View style={container}>
    <Text style={textStyle}>{children.toUpperCase()}</Text>
  </View>
)

const {
  container,
  textStyle,
} = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5
  },
  textStyle: {
    color: Color.primaryLight
  }
})

export default SectionListHeader