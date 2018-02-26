import React from 'react'
import { View, FlatList } from 'react-native'
import { List, ListItem, CheckBox,SearchBar } from 'react-native-elements'
import Flag from 'react-native-flags'
import { SelectableListItem } from '../../components'
// import { Ionicons } from '@expo/vector-icons'

const getFlag = country =>
  <Flag
    code={country}
    size={32}
  />

class SettingCurrencyContainer extends React.Component {

  state = {
    searchText: "",
    selected: (new Map(): Map<string, boolean>),
    data: [
      {key: 'DE', title: 'DE', selected: true},
      {key: 'FR', title: 'FR', selected: true},
      {key: 'GB', title: 'GB', selected: false},
      {key: 'US', title: 'US', selected: false},
      {key: 'GE', title: 'GE', selected: true},
      {key: 'JP', title: 'JP', selected: true},
    ],
  }

  _onChangeText = searchText => this.setState({searchText})

  _onClearText = () => this.setState({searchText: ""})

  _keyExtractor = (item, index) => item.id

  _onPressItem = key => {
    const {data} = this.state
    const selectedItem = data.find(i => i.key === key)
    selectedItem.selected = !selectedItem.selected

    const otherItems = data.filter(i => i.key != key)
    this.setState({
      data: [...otherItems, selectedItem]
    })
  }

    _renderItem = ({item, index}) => (
      <ListItem
        roundAvatar
        key={item.key}
        title={item.title}
        avatar={getFlag(item.key)}
        onPress={() => {this._onPressItem(item.key)}}
        rightIcon={{name: 'done'}}
        hideChevron={!item.selected}
      />
    )

  _renderHeader = () => (
    <SearchBar
      lightTheme
      onChangeText={this._onChangeText}
      onClearText={this._onClearText}
      clearIcon={{name: 'clear'}}
      placeholder='Type Here...'
    />
  )

  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={this._renderHeader}
        />
      </List>
    )
  }
}

export default SettingCurrencyContainer