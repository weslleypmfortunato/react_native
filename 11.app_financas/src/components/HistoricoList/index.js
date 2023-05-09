import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Container, Tipo, IconView, TipoText, ValorText } from './styles'

export default function HistoricoList ({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={ data.tipo }>
          { data.tipo === 'despesa' ? <FontAwesomeIcon icon={faArrowDown} color="#FFF" size={20} />: <FontAwesomeIcon icon={faArrowUp} color="#FFF" size={20} /> }
          <TipoText>{ data.tipo }</TipoText>
        </IconView>
      </Tipo>
      <ValorText>
        { data.valor.toFixed(2) }
      </ValorText>
    </Container>
  )
}