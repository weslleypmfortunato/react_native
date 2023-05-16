import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/ClockIn_Out';
import MissingProducts from '../pages/MissingProducts';

const Drawer = createDrawerNavigator()

export default function Routes () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='MissingProducts'
        component={MissingProducts}
        options={{
          title: 'WH Missing Products',
          headerShown: false
        }}
      />
      <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Clock In / Out Screen',
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}
