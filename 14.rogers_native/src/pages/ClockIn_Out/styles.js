import styled from 'styled-components/native'

export const Container = styled.SafeAreaView `
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
`

export const Logo = styled.Image `
  margin-top: 20px;
  margin-bottom: 20px;
  width: 200px;
  height: 180px;
  margin-top: 60px;
  margin-bottom: 60px;
`

export const Login = styled.Text `
  color: black;
  font-size: 24px;
  margin-top: 20px;
`

export const InputCode = styled.TextInput `
  background-color: rgba(0,0,0,0.10);
  width: 90%;
  font-size: 22px;
  color: black;
  margin-top: 15px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 5px;
`

export const InputPassword = styled.TextInput `
  background-color: rgba(0,0,0,0.10);
  width: 90%;
  font-size: 22px;
  color: black;
  margin-top: 15px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 5px;
`

export const BtnLogin = styled.TouchableOpacity `
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
  margin-top: 15px;
`

export const BtnLoginText = styled.Text `
  color: #FFFFFF;
  font-weight: 600;
  font-size: 22px;
`

export const Message = styled.Text `
  color: blue;
  font-size: 18px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-style: italic;
`