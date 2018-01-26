import React from 'react'
import {
  Switch,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Color from '../../constants/Color'

const SelectableListItem = ({
  pressEvent,
  index,
  icon,
  selected,
  children
}) => (
  <TouchableHighlight onPress={pressEvent}>
    <View style={[container, index == 0 ? borderTop : null]}>
      <Text style={textStyle}>
        {icon
          ? <Text>
              <Ionicons color={Color.primaryLight} name={icon} size={20} />{'   '}
            </Text>
          : null}
        {children}
      </Text>
      {selected
        ? <Ionicons color={Color.secondaryLight} name="md-checkmark" size={20} />
        : null}
    </View>
  </TouchableHighlight>
)

const {
  container,
  borderTop,
  textStyle,
  toggle
} = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 5,
    borderBottomColor: '#d6d7da',
    borderBottomWidth: .5,
    backgroundColor: 'transparent',
  },
  borderTop: {
    borderTopWidth: .5,
    borderTopColor: '#d6d7da',
  },
  textStyle: {
    color: 'white',
  }
})

export default SelectableListItem