import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState(null)

  const inputRef = useRef(null)

  async function buscar() {
    if (cep === '') {
      alert('Digite um cep válido!')
      setCep('')
      return
    }
    try {
    const response = await api.get(`/${cep}/json`) 
    console.log(response.data)
    setCepUser(response.data)
    Keyboard.dismiss()
    } catch(error) {
      console.log('ERROR:' + error)
    }
  }

  const limpar = () => {
    setCep('')
    setCepUser(null)
    inputRef.current.focus()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 13175000"
          value={ cep }
          onChangeText={ (texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd' }]} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#cd3e1d' }]} onPress={ limpar }>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      { cepUser &&
        <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
      </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15
  },
  botao: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#FF0000'
  },
  botaoText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 500
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22
  }
})