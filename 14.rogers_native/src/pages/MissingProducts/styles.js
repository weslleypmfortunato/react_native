import styled from 'styled-components/native'

export const Container = styled.SafeAreaView `
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text `
  color: black;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`

export const List = styled.FlatList `
  padding-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 8px;
`