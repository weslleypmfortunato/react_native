import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView,TextInput, TouchableOpacity } from "react-native";
import firebase from '../../services/firebaseConnection'

export default function Login ({ changeStatus }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('login')

  function handleLogin () {
    if (type === 'login') {
      // aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        }).catch ((error) => {
          console.log(error)
          alert('Ops, parece que algo deu errado!')
          return
        })
    } else {
      // Aqui cadstramos o user
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        }).catch ((error) => {
          console.log(error)
          alert('Ops, parece que algo deu errado!')
          return
        })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        placeholder="Seu email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        placeholder="**************"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={[styles.handleLogin, { backgroundColor: type !== 'login' ?  '#121212' : '#3EA6F2'}]}  onPress={handleLogin}>
        <Text style={ styles.loginText}>
          { type === 'login' ? 'Acessar' : 'Cadastrar' }
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.handleLogin} onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
        <Text style={{textAlign: 'center'}}>
          { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta!' }
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F2F6FC',
    marginTop: 70
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
    marginHorizontal: 10
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 5
  },
  loginText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 600
  }
})