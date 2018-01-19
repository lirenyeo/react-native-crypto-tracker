import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import FetchCoinData from '../../actions/FetchCoinData'
import { CryptoItem, Loading } from '../../components'

class CryptoContainer extends React.Component {
  state = {
    refreshing: false
  }

  componentWillMount() {
    this.props.FetchCoinData()
  }

  _onRefresh = () => {
    this.setState({refreshing: true})
    this.props.FetchCoinData()
      .then(() => {
        this.setState({refreshing: false})
      })
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({item}) => <CryptoItem coin={item} />

  render() {
    const {isFetching, data} = this.props.crypto
    if (isFetching) return <Loading />

    return (
      <FlatList
        onRefresh={() => this._onRefresh()}
        refreshing={this.state.refreshing}
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = state => ({
  crypto: state.crypto
})

export default connect(
  mapStateToProps,
  {FetchCoinData}
)(CryptoContainer)