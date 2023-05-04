import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

export default class Entrar extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 10, }}>
        <Text style={{color: "white", fontSize: 28, marginTop: 60, paddingTop: 15, textAlign: 'center'}}>Seja bem-vindo!</Text>
        <Button title="Sair" onPress={ this.props.sair }/>
      </View>
    )
  }
}

  