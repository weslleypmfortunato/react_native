import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(35),
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 200,
            duration: 1000
          }
        ),
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 150,
            duration: 1000
          }
        )
      ])
    ).start()

  }
  

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169E1', justifyContent: 'center', borderRadius: 25}}>
          <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando</Text>
        </Animated.View>
      </View>
    );
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
