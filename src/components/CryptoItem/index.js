import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { icons } from '../../utils/CoinIcons'

const {
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus
} = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
})

const displayCurrency = (currency, amount) => {
  const decimal = {
    usd: 2,
    myr: 2,
  }

  return (
    <Text>
      <Text style={moneySymbol}> {currency.toUpperCase()} </Text>
      {parseFloat(amount).toFixed(decimal[currency])}
    </Text>
  )
}

const CryptoItem = ({
  coin: {
    symbol,
    coin_name,
    price_usd,
    price_myr,
    percent_change_24h,
    percent_change_7d
  }
}) => (
  <View style={container}>
    <View style={upperRow}>
      <Image
        style={image}
        source={{ uri: icons[symbol] }}
      />
      <Text style={coinSymbol}>{symbol}</Text>
      <Text style={coinName}>{coin_name}</Text>
      <Text style={coinPrice}>
        {displayCurrency('usd', price_usd)}
        <Text> / </Text>
        {displayCurrency('myr', price_myr)}
      </Text>
    </View>

    <View style={statisticsContainer}>
      <Text>24h:
         <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
      </Text>
      <Text>7d:
        <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
      </Text>
    </View>
  </View>
)

export default CryptoItem