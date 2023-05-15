import React, { useState } from "react";
import { Container, Logo, Login, InputCode, InputPassword, BtnLogin, BtnLoginText, Message } from './styles'
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

export default function Home () {
  const [employeeCode, setEmployeeCode] = useState('')
  const [password, setPassword] = useState('')
  const [refresh, setRefresh] = useState(true)

  const navigation = useNavigation()

  async function handleSubmit () {
    const response = await api.post(`/timesheet/clockin-clockout`,{ employeeCode, password })

    try {
      if (response.status === 201) {
        setRefresh(!refresh);
        Alert.alert(
          'Clock In registered successfully!',
          'Thank you for showing up today!'
        );
      }
      if (response.status === 200) {
        setRefresh(!refresh);
        Alert.alert(
          'Clock Out registered successfully',
          'Thank you for helping us today!'
        );
      }
      setEmployeeCode('');
      setPassword('');
    } catch(error) {
      console.log('ERROR:' + error)
    }
  }

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Container>
        <Login>
          {/* Clock In / Out Page */}
        </Login>
        <InputCode
          placeholder='Employee Code'
          autoCorrect={false}
          autoCapitalize='none'
          value={employeeCode}
          onChangeText={ (text) => setEmployeeCode(text)}
          onSubmitEditing={ () => Keyboard.dismiss() }
          keyboardType="numeric"
        />
        <InputPassword
          placeholder='Password'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={ (text) => setPassword(text)}
          secureTextEntry={true}
          onSubmitEditing={ () => Keyboard.dismiss() }
          keyboardType="numeric"
        />
        <BtnLogin onPress={handleSubmit}>
          <BtnLoginText>REGISTER</BtnLoginText>
        </BtnLogin>
        <Logo source={{ uri: 'https://res.cloudinary.com/weslley-m-fortunato/image/upload/v1677396073/rogers_images/eaql23eo6n1hnlmfnggy.png' }} />
        <Message>
          You can check your timesheet on any Rogers computer with Timesheet Control installed
        </Message>
      </Container>
    </KeyboardAwareScrollView>
  )
}