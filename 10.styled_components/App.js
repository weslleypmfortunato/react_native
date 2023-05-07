import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from "./src/assets/Styles";

export default function App () {
  return (
    <Container>
      <Titulo cor='#FF0000' tamanho="20">Sujeito Programador</Titulo>
      <Nome>Olá Weslley!</Nome>
      <BotaoSujeito onPress={ () => alert('Clicouuuu') }>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>
    </Container>
  )
}