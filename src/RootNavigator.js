import React from 'react'
import { Button, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import RootTabs from './RootTabs'
import { SettingCurrencyContainer } from './containers'
import Color from './constants/Color'

const withBackground = ScreenComponent => props => (
  <View style={{ flex: 1, backgroundColor: Color.primaryDark}}>
    <ScreenComponent {...props} />
  </View>
)

const RouteConfigs = {
  Main: {
    screen: RootTabs,
    navigationOptions: {
      header: null,
    }
  },
  SettingCurrency: {
    screen: withBackground(SettingCurrencyContainer),
    navigationOptions: {
      headerTitle: 'Choose Main Currency',
    },
  },
}

const imbaConfig = {
  // mode: 'card',
  headerMode: 'screen',
  navigationOptions: params => ({
    // gesturesEnabled: true,
    gesturesDirection: 'inverted',
    headerStyle: {
      backgroundColor: Color.secondaryDark,
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  }),
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-width, 0, width],
          }),
        }]
      };
    },
    headerTitleInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-50, 0, 50],
          }),
        }]
      };
    },
  }),
}

const StackNavigatorConfig = {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: Color.secondary,
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white',
    }
  }
}

const RootNavigator = StackNavigator(RouteConfigs, imbaConfig)

export default RootNavigator