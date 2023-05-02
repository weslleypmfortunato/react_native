import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Filmes extends Component {
  render() {
    const { nome, foto } = this.props.data
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{nome}</Text>
          <Image 
            source={{ uri: foto}}
            style={styles.capa}
          />
          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
              <Text style={styles.botaoTexto}>Leia Mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    backgroundColor: 'white',
    textShadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  titulo: {
    fontSize: 18,
    padding: 15
  }, capa: {
    height: 250,
    zIndex: 1
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -40,
    zIndex: 2
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto: {
    textAlign: 'center',
    color: 'white'
  }
})