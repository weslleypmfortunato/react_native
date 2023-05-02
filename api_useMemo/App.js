import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes')
      if (nomeStorage !== null) {
        setNome(nomeStorage)
      }
    }
    getStorage()
  }, [])

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage()

  }, [nome])

  function alteraNome() {
    setNome(input)
    setInput('')
  }

  const letrasNome = useMemo(() => {
    console.log('Mudou letra')
    return nome.length
  }, [nome])

  return (
    <View style={styles.container}>

      <TextInput 
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{ nome }</Text>
      <Text style={styles.texto}>Tem { letrasNome } letras.</Text>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  texto: {
    color: 'green',
    fontSize: 45
  },
  btn: {
    backgroundColor: 'black',
    alignItems: 'center'
  },
  btnText: {
    color: 'white'
  }
})