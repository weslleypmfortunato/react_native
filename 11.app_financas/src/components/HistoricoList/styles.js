import styled from 'styled-components/native'

export const Container = styled.View `
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0,0,0, 0.04);
  background-color: rgba(0,0,0, 0.02);
`

export const Tipo = styled.View `
  flex-direction: row;
`

export const IconView = styled.View `
  flex-direction: row;
  background-color: ${ props => props.tipo === 'despesa' ? '#C63C36' : '#049301'};
  padding: 3px 8px;
  border-radius: 5px;
  gap: 8px;
`

export const TipoText = styled.Text `
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`

export const ValorText = styled.Text `
  color: #222;
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
`