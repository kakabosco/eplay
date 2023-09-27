import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  max-width: 240px;
  margin: 0 auto;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.white};
`
