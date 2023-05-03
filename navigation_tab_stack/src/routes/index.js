import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons/faIdCardClip'


import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';3
import Contato from '../pages/Contato';

const Tab = createBottomTabNavigator()

export default function Routes (){
  return(
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
        name='HomeStack'
        component={StackRoutes}
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
  )
}