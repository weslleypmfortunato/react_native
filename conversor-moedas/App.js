import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// baseURL: https://free.currencyconverterapi.com/api/v5/
// ====> convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad