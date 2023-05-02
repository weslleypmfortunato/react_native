import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({modalVisible: true})
  }

  sair(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Entrar' onPress={ this.entrar } />
        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Entrar sair={ () => this.sair(false) }/>
          </View>
        </Modal>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
