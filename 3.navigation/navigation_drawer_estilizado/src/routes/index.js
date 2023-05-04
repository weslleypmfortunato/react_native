import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';3
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

export default function Routes (){
  return(
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{ // lembrando que aqui muda para todos. Se quiser individual precisa alterar no Drawer.Screen
        headerShown: false,
        drawerActiveBackgroundColor: '#00DAE4', // a cor da tela acessada
        drawerActiveTintColor: '#FFF', // a cor da letra do drawer
        drawerInactiveBackgroundColor: '#F1F1F1', // bg da tela não acessada
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