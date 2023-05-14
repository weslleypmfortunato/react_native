import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, TextInput, StatusBar } from 'react-native';
import Entrar from './src/components/Entrar';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alcool: '',
      gasolina: '',
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({modalVisible: true})
  }

  sair() {
    this.setState({modalVisible: false})
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image 
          source={require('./src/images/logo.png')}
          style={styles.bombaGasolina}
        />
        <Text style={styles.titulo}>Qual a melhor opção?</Text>
        <View style={styles.mainView}>
          <View style={styles.precoGas}>
            <Text style={styles.combustivel}>Álcool (preço por litro):</Text>
            <TextInput
              value={this.state.alcool}
              onChangeText={(text) => this.setState({alcool: text})}
              underlineColorAndroid='transparent'
              style={styles.input}
            />
          </View>
          <View style={styles.precoGas}>
            <Text style={styles.combustivel}>Gasolina (preço por litro):</Text>
            <TextInput
              value={this.state.gasolina}
              onChangeText={(text) => this.setState({gasolina: text})}
              underlineColorAndroid='transparent'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.viewBtnCalcular}>
          <TouchableOpacity onPress={this.entrar}>
            <Text style={styles.textoCalcular}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType='slide' visible={this.state.modalVisible}>
          <View>
            <Entrar sair={ () => this.sair(false)} alcool={this.state.alcool} gasolina={this.state.gasolina}/>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  mainView: {
    width: '100%',
    marginTop: 30,
    gap: 5
  },
  bombaGasolina: {
    marginTop: 60
  },
  titulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 15
  },
  combustivel: {
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 35,
    borderRadius: 5,
    paddingLeft: 10
  },
  viewBtnCalcular: {
    backgroundColor: '#FF7F50',
    marginTop: 50,
    borderRadius: 5,
    width: '100%'
  },
  textoCalcular: {
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
  fontSize: 18,
  textAlign: 'center'
  },
  precoGas: {
    gap: 5,
    marginTop: 15
  }
});