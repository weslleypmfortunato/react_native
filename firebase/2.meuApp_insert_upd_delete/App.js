import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;

export default function App() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  useEffect(() => {

    async function dados() {
     //  Criar um nó
     //  await firebase.database().ref('tipo').set('Cliente')

     //  Remover um nó
     //  await firebase.database().ref('tipo').remove()

      // adicionar um novo user na minha db.
      // Aqui precisa tomar cuidado para manter todos os atributos pq se não ele vai deletar o que a gnt esquecer de add. Deve ser tipo o PATCH
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Neidoca',
      //   cargo: 'Dona de casa'
      // })

      // Já aqui eu posso escrever/alterar somente o atributo que eu quiser que ele vai manter os demais, mesmo que eu não escreva. USAR SEMPRE ESSE
      // await firebase.database().ref('usuarios').child(3).update({
      //   nome: 'Maria Neide'
      // })


    }

    dados();
  }, []);

  async function cadastrar () {
    if (nome !== '' & cargo !== '') {
      let usuarios = await firebase.database().ref('usuarios')
      let chave = usuarios.push().key // esta chave está criando uma key dentro de usuarios

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      })
      alert('Cadastrado com Sucesso!')
      setCargo('')
      setNome('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={ (texto) => setNome(texto) }
        value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={ (texto) => setCargo(texto) }
        value={cargo}
      />

      <Button 
        title='Novo Funcionário'
        onPress={cadastrar}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1, borderColor: '#121212',
    height: 45,
    fontSize: 17,
    borderRadius: 5
  }
})