import styled from 'styled-components/native'

export const Container = styled.View `
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ViewInput  = styled.View `
    flex-direction: row;
    gap: 15px;
`

export const InputProduct = styled.TextInput `
  background-color: rgba(0,0,0,0.10);
  width: 45%;
  font-size: 22px;
  color: black;
  margin-top: 15px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 5px;
`

export const InputQuantity = styled.TextInput `
  background-color: rgba(0,0,0,0.10);
  width: 45%;
  font-size: 22px;
  color: black;
  margin-top: 15px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 5px;
`

export const AddBtn = styled.TouchableOpacity `
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 94%;
  padding: 5px;
  border-radius: 5px;
  margin-top: 15px;
`

export const AddBtnText = styled.Text `
  color: white;
  font-weight: 600;
  font-size: 22px;
`