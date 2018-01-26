import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { MainScene, AltfolioScene, NewsScene, SettingScene } from './scenes'
import Color from './constants/Color'

const _tabBarIcon = iconName => (
  ({ tintColor, focused }) => (
    <Ionicons
      name={iconName}
      size={22}
      style={{ color: 'white' }}
    />
  )
)

const RouteConfigs = {
  Main: {
    screen: MainScene,
    navigationOptions: {
      tabBarIcon: _tabBarIcon('md-home'),
    },
  },
  Altfolio: {
    screen: AltfolioScene,
    navigationOptions: {
      tabBarIcon: _tabBarIcon('md-cash'),
    },
  },
  News: {
    screen: NewsScene,
    navigationOptions: {
      tabBarIcon: _tabBarIcon('md-paper'),
    },
  },
  Setting: {
    screen: SettingScene,
    navigationOptions: {
      tabBarIcon: _tabBarIcon('md-settings'),
    },
  },
}

const TabNavigatorConfig = {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      backgroundColor: Color.secondary,
    },
    style: {
      backgroundColor: Color.primary,
      marginTop: StatusBar.currentHeight,
    }
  }
}

const RootTabs = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default RootTabs;