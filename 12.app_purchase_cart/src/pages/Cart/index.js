import { SafeAreaView ,View, Text, StyleSheet, FlatList } from "react-native"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CardItem from "../../components/CardItem"

export default function Cart () {

  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        ListEmptyComponent={ () => <Text style={styles.emptyCart}>Nenhum item no carrinho</Text> }
        renderItem={ ({ item }) => (
          <CardItem 
            data={ item } 
            addAmount={ () => addItemCart(item)}
            removeAmount={ () => removeItemCart(item) }
          />
        )}
        ListFooterComponent={ () => total !== '0.00' && <Text style={styles.total}> Total: R$ { total } </Text>}
        // ListFooterComponent={ () => <Text style={styles.total}> Total: R$ { total } </Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  emptyCart: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center',
    color: 'blue'
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
    color: 'blue',
    fontStyle: 'italic'
  }
})