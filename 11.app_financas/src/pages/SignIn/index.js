import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const { signIn, loadingAuth } = useContext(AuthContext)

  function handleLogin () {
    signIn(email, password)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../images/Logo.png')}/>
        <AreaInput>
          <Input 
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true} // aqui ele esconde o password digitado
          />
        </AreaInput>
        <SubmitButton onPress={ handleLogin }>
          { 
            loadingAuth ? (
              <ActivityIndicator color="#FFF" size={20} />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>
        <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  )
}