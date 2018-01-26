import React from 'react'
import { FlatList } from 'react-native'
import { SelectableListItem } from '../../components'

class SettingCurrencyContainer extends React.PureComponent {

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item, index}) => {
    return (
      <SelectableListItem
        id={item.id}
        index={index}
        pressEvent={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
      >
        {item.title}
      </SelectableListItem>
    )
  }

  render() {
    console.log('state', this.state)
    console.log('props', this.props)
    return (
      <FlatList
        data={data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const data = [
  {id: '1', key: 'DE', title: 'DE'},
  {id: '2', key: 'FR', title: 'FR'},
  {id: '3', key: 'GB', title: 'GB'},
  {id: '4', key: 'US', title: 'US'},
  {id: '5', key: 'GE', title: 'GE'},
  {id: '6', key: 'JP', title: 'JP'},
]

export default SettingCurrencyContainer