import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from "../pages/Home";
import New from '../pages/New';
import Perfil from '../pages/Perfil';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();
console.disableYellowBox=true

function AppRoutes () {
  return (
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
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
      <AppDrawer.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }} />
      <AppDrawer.Screen 
        name="Registrar" 
        component={New}
        options={{
          headerShown: false
        }} />
      <AppDrawer.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          headerShown: false
        }} />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes