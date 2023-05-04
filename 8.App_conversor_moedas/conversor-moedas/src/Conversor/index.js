import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import api from '../services/api';

export default class Conversor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0
    }
    this.converter = this.converter.bind(this)
  }

   async converter() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB
    const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)
    let cotacao = response.data[de_para]
    
    let resultado = (cotacao * parseFloat(this.state.moedaB_valor))
    
    this.setState({
      valorConvertido: resultado.toFixed(2)
    })
    Keyboard.dismiss()
  }

  render() {
    const { moedaA, moedaB } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
        <TextInput 
          placeholder='Valor a ser convertido'
          style={styles.areaInput}
          onChangeText={(moedaB_valor) => this.setState({moedaB_valor: moedaB_valor})}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.valorConvertido}>
          {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: 'black',
    borderRadius: 5
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15
  }
})