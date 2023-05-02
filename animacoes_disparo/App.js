import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(35),
      OpAnimada: new Animated.Value(0),
      vendas: ''
    }
    this.carregarGrafico = this.carregarGrafico.bind(this)

  }

  carregarGrafico() {
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue: 1,
          duration: 400,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        this.state.AltAnimada, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false
        }
      )
    ]).start(() => {
      this.setState({vendas: 'Vendas'})
    })
  }
  

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{height: 100, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169E1', paddingTop: 50}}>
          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize: 25, color: 'white'}}>Gerar Gráfico</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20}}>
          <Text>Vendas</Text>
          <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: 'red', justifyContent: 'center', borderRadius: 25, opacity: this.state.OpAnimada}}>
            <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>R$ 150,00</Text>
          </Animated.View>

        </View>


      </View>
    );
  }
}


