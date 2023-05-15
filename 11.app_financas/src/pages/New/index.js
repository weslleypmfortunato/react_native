import React, { useState, useContext } from "react";
import { View, v, TouchableWithoutFeedback, Alert } from "react-native";
import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Picker from "../../components/Picker/index";
import firebase from "../../services/firebaseConnection";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";


export default function New () {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState(null)

  const navigation = useNavigation()
  const { user: usuario } = useContext(AuthContext)

  function handleSubmit () {
    Keyboard.dismiss()

    if (isNaN(parseFloat(valor)) || tipo === null ) {
      alert('Pressione "Receita" ou "Despesa"')
      return
    }
    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: R$${parseFloat(valor).toFixed(2)} `,
      [
        {
          text: 'Cancelar', 
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd () {
    let uid = usuario.uid

    let key = await firebase.database().ref('historico').child(uid).push().key
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yyyy')
    })
    //atualizar o saldo
    let user = firebase.database().ref('users').child(uid)
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo)

      tipo === "despesa" ? saldo -= parseFloat(valor) : saldo += parseFloat(valor)

      user.child('saldo').set(saldo)
    })
    Keyboard.dismiss()
    setValor('')
    navigation.navigate('Home')
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
      <Background>
        <Header />
        <View style={{ alignItems: 'center'}}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next" // isso foi usado pq vai ter um picker depois
            onSubmitEditing={ () => Keyboard.dismiss() } // qdo enviar ele fecha o keyboard
            value={valor}
            onChangeText={ (text) => setValor(text) }
          />
          <Picker onChange={ setTipo } tipo={ tipo } style={{ borderRadius: '10px' }}/>
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}