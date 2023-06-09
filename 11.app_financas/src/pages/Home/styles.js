import styled from 'styled-components/native'

export const Background = styled.SafeAreaView `
  flex: 1;
  background-color: #131313;
`

export const Container = styled.View `
  margin-left: 15px;
  margin-bottom: 25px;
`

export const Nome = styled.Text `
  font-size: 25px;
  color: #FFF;
  font-style: italic;
`

export const Saldo = styled.Text `
  margin-top: 5px;
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`

export const Title = styled.Text `
  margin-left: 10px;
  color: #00B94A;
`

export const List = styled.FlatList.attrs({
  marginHorizontal: 15
}) `
  padding-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 8px;
`

export const Area = styled.View `
  flex-direction: row;
  margin-left: 15px;
  align-items: flex-end;
  margin-bottom: 10px;
`