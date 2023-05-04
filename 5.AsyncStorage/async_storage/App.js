import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      nome: ''
    }
    this.gravaNome = this.gravaNome.bind(this)
  }

  // ComponentDidMount - executado quando o component é montado em tela
  async componentDidMount() {
    await AsyncStorage.getItem('nome')
      .then((value) => {
        this.setState({nome: value})
      })
  }

  // ComponentDidUpdate - toda vez que um state é atualizado ele faz algo...
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome

    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome)
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    })
    alert('salvo com sucesso!')
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewInput}>
          <TextInput 
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 320,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  botao: {
    backgroundColor: "gray",
    color: 'white',
    height: 40,
    padding: 10,
    marginLeft: 4,
    borderRadius: 5
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }
});
