import React, { createContext, useState, useEffect } from "react";
import firebase from '../services/firebaseConnection'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorage () {
      const storageUser = await AsyncStorage.getItem('Auth_user')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  //cadastrar user
  async function signUp (email, password, nome) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async (value) => {
        let uid = value.user.uid
        await firebase.database().ref('users').child(uid).set({
          saldo: 0,
          nome: nome
        })
        .then( () => {
          let data = {
            uid: uid,
            nome: nome,
            email: value.user.email
          }
          setUser(data)
          storageUser(data)
        })
      })
      .catch( (error) => {
        alert(error.code)
      })
  }

  // logar user
  async function signIn (email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( async (value) => {
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value')
      .then( (snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: value.user.email
        }
        setUser(data)
        storageUser(data)
      })
    })
    .catch( (error) => {
      alert(error.code)
    })
  }

  async function storageUser (data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function signOut () {
    await firebase.auth().signOut()
    await AsyncStorage.clear()
    .then( () => {
      alert("Deslogado com sucesso")
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading }}>
    {/* !!user está na aula 96. Basicamente ele transforma o valor de user em boolean. Se tiver algo dentro vai ser true, caso contrario, false */}
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider