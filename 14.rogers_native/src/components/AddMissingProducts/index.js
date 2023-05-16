import React, { useState } from "react";
import { Keyboard } from "react-native";
import { Container, ViewInput, InputProduct, InputQuantity, AddBtn, AddBtnText } from './styles'
import api from "../../services/api";
import RNRestart from 'react-native-restart';

export default function AddMissingProducts () {
  const [missingProducts, setMissingProducts] = useState([])
  const [productCode, setProductCode] = useState('')
  const [quantities, setQuantities] = useState('')

  async function handleSubmitPost () {
    const addProduct = { productCode, quantities }

    setMissingProducts([...missingProducts, addProduct])
    setProductCode('')
    setQuantities('')

    const response = await api.post(`/missing-products`, addProduct)
    RNRestart.Restart();

    try {
      if (response.status === 201 || response.status === 200) {
        setRefresh(!refresh)
      }
    } catch(error) {
      console.log('ERROR:' + error)
    }
  }

  return (
    <Container>
      <ViewInput>
        <InputProduct
          placeholder="Product Code"
          autoCorrect={false}
          value={productCode}
          onChangeText={ (text) => setProductCode(text) }
          onSubmitEditing={ () => Keyboard.dismiss() }
          keyboardType="numeric"
        />
        <InputQuantity
          placeholder="Quantity"
          autoCorrect={false}
          value={quantities}
          onChangeText={ (text) => setQuantities(text) }
          onSubmitEditing={ () => Keyboard.dismiss() }
          keyboardType="numeric"
        />
      </ViewInput>
      <AddBtn onPress={ handleSubmitPost }>
        <AddBtnText>Add</AddBtnText>
      </AddBtn>
    </Container>
  )
}