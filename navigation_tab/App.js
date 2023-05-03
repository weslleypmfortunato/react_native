import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons/faIdCardClip'


import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
     <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, // faz o teclado sobrepor a navbar. Sem isso o navbar ia subir a tela junto com o teclado
        tabBarShowLabel: false, // esconde o nome do icone
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0 // remove uma borda feia que fica entre o navbar e a tela
        }
      }}
     >
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          // tabBarLabel: 'INÍCIO'
          // headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faHouse} color={color} size={size} />
          }
        }}
      />
      <Tab.Screen 
        name='Sobre'
        component={Sobre}
        options={{
          // headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faAddressCard} color={color} size={size} />
          }
        }}
      />
      <Tab.Screen 
        name='Contato'
        component={Contato}
        options={{
          // headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faIdCardClip} color={color} size={size} />
          }
        }}
      />
     </Tab.Navigator>
    </NavigationContainer>
  )
}