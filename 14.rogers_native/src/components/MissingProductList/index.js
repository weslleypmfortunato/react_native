import React, { useState } from "react";
import { Container, FullProduct, ProdQty } from './styles'

export default function MissingProductList ({ data }) {
  const [date, setDate] = useState(new Date())

  return (
    <Container>
      <FullProduct>{ data.productCode } - { data.productDescription }</FullProduct>
      <ProdQty>{ data.totalQuantity }</ProdQty>
    </Container>
  )
}