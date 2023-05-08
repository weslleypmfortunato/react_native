import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, Text, StatusBar } from "react-native";
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox=true

export default function App () {
  return (
    <NavigationContainer>
      <AuthProvider> 
      {/* Este AuthProvider esta fzd que todos os componentes tenham acesso ao que esta dentro do contexts/auth.js que esta sendo usado na routes/index */}
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

