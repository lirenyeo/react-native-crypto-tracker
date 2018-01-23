import React from 'react'
import {
  Switch,
  Text,
  View,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Color from '../../constants/Color'

class MenuListItem extends React.Component {
  render() {
    const {
      index,
      item: {
        text, toggle, icon
      }
    } = this.props

    return (
      <View style={[container, index == 0 ? borderTop : null]}>
        <Text style={textStyle}>
          {icon
            ? <Text>
                <Ionicons color={Color.primaryLight} name={icon} size={20} />{'   '}
              </Text>
            : null}
          {text}
        </Text>
        {toggle
          ? <Switch
              onTintColor={Color.secondaryLight}
              tintColor={Color.primaryLight}
              thumbTintColor={Color.secondary}
            />
          : null}
      </View>
    )
  }
}

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
    backgroundColor: Color.primary
  },
  borderTop: {
    borderTopWidth: .5,
    borderTopColor: '#d6d7da',
  },
  textStyle: {
    color: 'white',
  },
  toggle: {

  }
})

export default MenuListItem