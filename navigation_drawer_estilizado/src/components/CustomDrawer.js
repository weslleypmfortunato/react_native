import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer (props) {
  return (
    // Este DrawerContentScrollView é added para ter um scroll no drawer caso haja mtas telas 
    // ...props foi aqui pois eu não sei quais as propriedades do DrawerContentScrollView, então repasssei todas elas com o ...props
    <DrawerContentScrollView {...props}> 
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/perfil.png')}
          style={{width: 65, height: 65}}
        />
        <Text style={styles.texto}>Bem-vindo!</Text>
      </View>
      <DrawerItemList
        // aqui ele recebe todas as propriedades/telas que estão no Drawer.Navigator no  src/routes/index
        {...props} 
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  texto: {
    color: '#000',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 35
  }
})
