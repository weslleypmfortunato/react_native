import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Weslley')
  const [input, setInput] = useState('')

  const alteraNome = () => {
    setNome(input)
    setInput('')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Seu nome'
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Alterar Nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{ nome }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  texto: {
    color: '#000',
    fontSize: 35
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    color: 'white'
  }
})