import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator()

export default function Routes () {
  return (
    <Drawer.Navigator>
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
