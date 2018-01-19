import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import FetchCoinData from '../../actions/FetchCoinData'
import { CryptoItem, Loading } from '../../components'

class CryptoContainer extends React.Component {
  componentWillMount() {
    this.props.FetchCoinData()
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({item}) => <CryptoItem coin={item} />

  render() {
    const {isFetching, data} = this.props.crypto
    if (isFetching) return <Loading />

    return (
      <FlatList
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