import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "../pages/Home";
import New from '../pages/New';
import Perfil from '../pages/Perfil';

const AppDrawer = createDrawerNavigator();
console.disableYellowBox=true

function AppRoutes () {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717'
        },
        drawerContentOptions: {
          labelStyle: {
            fontWeight: 'bold',
          }
        },
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#DDD',
      }}
      
    >
      <AppDrawer.Screen name="Home" component={Home}/>
      <AppDrawer.Screen name="Registrar" component={New} />
      <AppDrawer.Screen name="Perfil" component={Perfil} />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes