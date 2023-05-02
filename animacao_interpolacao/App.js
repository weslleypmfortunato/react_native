import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(0)
    }
    Animated.timing(
      this.state.LarAnimada, {
        toValue: 100,
        duration: 5000,
        useNativeDriver: false
      }
    ).start()
  }

  render() {

    let porcentageAnimate = this.state.LarAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      <Animated.View style={styles.container}>

        <Animated.View style={{backgroundColor: '#4169E1', width: porcentageAnimate, height: 25}}>

        </Animated.View>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
