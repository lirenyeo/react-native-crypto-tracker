import React from 'react'
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'
import { Ionicons } from '@expo/vector-icons'
import { MainScene, AltfolioScene, NewsScene, SettingScene } from './scenes'
import Color from './constants/Color'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

const MainRoute = () => <MainScene />
const AltfolioRoute = () => <AltfolioScene />
const NewsRoute = () => <NewsScene />
const SettingRoute = () => <SettingScene />

class AppContainer extends React.Component {
  state = {
    index: 3,
    routes: [
      { key: 'main', icon: 'md-home' },
      { key: 'altfolio', icon: 'md-cash' },
      { key: 'news', icon: 'md-paper' },
      { key: 'setting', icon: 'md-settings' }
    ],
  }

  _handleIndexChange = index => this.setState({ index })

  _renderHeader = props => (
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
    />
  )

  _renderScene = SceneMap({
    main: MainRoute,
    altfolio: AltfolioRoute,
    news: NewsRoute,
    setting: SettingRoute
  })

  _renderIcon = ({route}) => <Ionicons name={route.icon} size={24} color="white" />

  render() {
    console.log(this)
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  tempContainer: {
    flex: 1
  },
  tabbar: {
    backgroundColor: Color.primary,
  },
  indicator: {
    backgroundColor: Color.secondary,
  },
})

export default AppContainer