import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Container, ButtonMenu } from './styles'
import { useNavigation } from "@react-navigation/native";

export default function Header () {

  const navigation = useNavigation()

  return (
    <Container>
      <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
      <FontAwesomeIcon icon={faBars} color="#FFF" size={30} />
      </ButtonMenu>
    </Container>
  )
}