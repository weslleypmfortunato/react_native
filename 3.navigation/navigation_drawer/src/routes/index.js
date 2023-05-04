import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';3
import Contato from '../pages/Contato';


export default function Routes (){
  return(
    <Drawer.Navigator
      screenOptions={{ // lembrando que aqui muda para todos. Se quiser individual precisa alterar no Drawer.Screen
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#121212', //bg do drawer
        },
        drawerActiveBackgroundColor: '#3B3DBF', // a cor da tela acessada
        drawerActiveTintColor: '#FFF', // a cor da letra do drawer
        drawerInactiveBackgroundColor: '#CCC', // bg da tela não acessada
        drawerInactiveTintColor: '#000' // cor da letra da tela não acessada
      }}
    >
      <Drawer.Screen 
        name='HomeStack'
        component={StackRoutes}
        options={{
          title: 'INÍCIO'
        }}
      />
      <Drawer.Screen 
        name='Sobre'
        component={Sobre}
      />
      <Drawer.Screen 
        name='Contato'
        component={Contato}
      />
    </Drawer.Navigator>
  )
}