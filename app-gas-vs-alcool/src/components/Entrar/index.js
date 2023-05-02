import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Entrar extends Component {
  render() {
    return (
      <View style={styles.modal}>
        <Image 
          source={require('../../images/gas.png')}
          style={styles.logoModal}
        />
        <Text style={styles.tituloModal}>Compensa usar {this.props.alcool / this.props.gasolina < 0.7 ? 'Álcool' : 'Gasolina'}</Text>
        <View style={styles.modalDetails}>
          <Text style={styles.subtitleModal}>Com os preços: </Text>
          <Text style={styles.precoModal}> Álcool: R$ {Number(this.props.alcool).toFixed(2)}</Text>
          <Text style={styles.precoModal}> Gasolina: R$ {Number(this.props.gasolina).toFixed(2)}</Text>
        </View>
        <View style={styles.modalBtnCalcular}>
          <TouchableOpacity onPress={this.props.sair}>
            <Text style={styles.textoReCalcular}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tituloModal: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20
  },
  subtitleModal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  modal: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  precoModal: {
    color: 'white'
  },
  modalDetails: {
    gap: 10,
    alignItems: 'center'
  },
  modalBtnCalcular: {
    marginTop: 50,
    width: '100%'
  },
  textoReCalcular: {
    color: '#FF7F50',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
})