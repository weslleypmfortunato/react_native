import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Product ({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$  {data.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 5,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold'
  },
  buttonAdd: {
    backgroundColor: "#168FFF",
    width: 35,
    height: 35,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})