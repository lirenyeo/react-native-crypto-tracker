import React from 'react'
import { SectionList, Text } from 'react-native'
import { MenuListItem, SectionListHeader } from '../../components'


class SettingContainer extends React.Component {

  _renderItem = ({item, index}) =>
    <MenuListItem
      navigation={this.props.navigation}
      item={item}
      index={index}
    />

  _renderSectionHeader = ({section}) => <SectionListHeader>{section.title}</SectionListHeader>

  render() {
    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        sections={sections}
        keyExtractor={(item, index) => index}
      />
    )
  }
}

const sections = [
  {
    title: 'Log In to Sync Between Devices',
    data: [
      {text: 'Logged in as liren90@gmail.com'}
    ]
  },
  {
    title: 'User Interface',
    data: [
      {text: 'Set Language', icon: 'md-globe'},
      {text: 'Choose Main Currency', icon: 'md-cash', navScreen: 'SettingCurrency'},
      {text: 'Use Dark Theme', toggle: true}
    ]
  },
  {
    title: 'Support Us',
    data: [
      {text: 'Contact Us', icon: 'md-call'},
      {text: 'Share this app', icon: 'md-share-alt'},
      {text: 'Rate this app', icon: 'md-star'},
    ]
  },

]

export default SettingContainer