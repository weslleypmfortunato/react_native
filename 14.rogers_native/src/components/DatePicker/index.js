import React, { useState } from "react";
import { Text, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, Header } from './styles'

export default function DatePicker ({ onClose, date, onChange }) {
  const [dateNow, setDateNow] = useState(new Date(date))
  
  return (
    <Container>
      {
        Platform.OS === 'ios' && (
          <Header>
            <TouchableOpacity onPress={ onClose }>
              <Text>Back</Text>
            </TouchableOpacity>
          </Header>
        )
      }
      <DateTimePicker 
        value={ dateNow }
        mode="date"
        display="spinner"
        onChange={ (event, date) => {
          const currentDate = date || dateNow
          setDateNow(currentDate)
          onChange(currentDate)
        }}
        style={{ backgroundColor: 'white'}}
      />
    </Container>
  )
}