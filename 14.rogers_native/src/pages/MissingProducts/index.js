import React, { useState, useEffect } from "react";
import AddMissingProducts from "../../components/AddMissingProducts";
import { Container, Title, List } from './styles'
import api from "../../services/api";
import MissingProductList from "../../components/MissingProductList";

export default function MissingProducts () {

  const oneDayBefore = new Date(Date.now() - ( 3600 * 1000 * 24 ))
  const twoDaysAfter = new Date(Date.now() + ( 3600 * 1000 * 24 ))

  const [missingProducts, setMissingProducts] = useState([])
  const [startDate, setStartDate] = useState(oneDayBefore.toJSON().slice(0, 10).replace('/','-'))
  const [endDate, setEndDate] = useState(twoDaysAfter.toJSON().slice(0, 10).replace('/','-'))

  useEffect(() => {
    async function loadList () {
      try {
        const response = await api.get(`/missing-products?startDate=${startDate}&endDate=${endDate}`)
        setMissingProducts(response.data)
        console.log('Dados da resposta:', response.data);
      } catch(error) {
        console.log('ERROR:' + error)
      }
    }
    loadList()
  }, [startDate, endDate])

  return (
    <Container>
      <Title>
        Missing Items List
      </Title>
      {/* Aqui vai o pickerdate */}
      <AddMissingProducts />
      <List 
        showsVerticalScrollIndicator={false}
        data={missingProducts}
        keyExtractor={(item) => {
          console.log('Item ID:', item._id);
          return item._id;
        }}
        renderItem={ ({item}) => ( 
          <MissingProductList 
          data={item} 
          />
        )}
      />
    </Container>
  )
}