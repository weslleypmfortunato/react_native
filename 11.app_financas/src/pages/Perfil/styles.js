import styled from 'styled-components/native'

export const Container = styled.View `
  flex: 1;
  background-color: #131313;
  align-items: center;
`

export const Nome = styled.Text `
  text-align: center;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: white;
`

export const NewLink = styled.TouchableOpacity `
  justify-content: center;
  align-items: center;
  background-color: #00B94A;
  width: 90%;
  height: 45px;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const NewText = styled.Text `
  font-size: 18px;
  color: white;
  font-weight: bold;
`

export const Logout = styled.TouchableOpacity `
  justify-content: center;
  align-items: center;
  background-color: #C62C36;
  width: 90%;
  height: 45px;
  border-radius: 5px;
`

export const LogoutText = styled.Text `
  font-size: 18px;
  color: white;
  font-weight: bold;
`