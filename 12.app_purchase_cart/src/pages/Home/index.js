import { SafeAreaView ,View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { useState, useContext } from "react";
import { Feather } from '@expo/vector-icons'
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/CartContext";

export default function Home () {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca-Cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guaraná lata",
      price: 6.00
    },
  ])

  const navigation = useNavigation()
  const { cart, addItemCart } = useContext(CartContext)

  function handleAddCart (item){
    addItemCart (item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity style={styles.cartButton} onPress={ () => navigation.navigate('Cart')}>
          { cart.length >= 1 && (
            <View style={styles.dot}>
            <Text style={styles.dotText}>{ cart?.length} </Text>
          </View>
          ) }
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList 
        style={styles.list}
        data={products}
        keyExtractor={ (item) => String(item.id)}
        renderItem={ ({ item }) => <Product data={ item } addToCart={ () => handleAddCart(item) }/> }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingEnd: 14,
    paddingStart: 14
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 2,
    bottom: -2,
    left: -4
  },
  dotText: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})