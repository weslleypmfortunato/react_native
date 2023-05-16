import styled from 'styled-components/native'

export const Container = styled.View `
  flex: 1;
  align-items: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: row;
  justify-content: space-between;
`

export const FullProduct = styled.Text `
  font-size: 16px;
  color: black;
`

export const ProdQty = styled.Text `
  font-size: 16px;
  color: red;
  font-weight: 900;
`