import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${colors.white};
  border-radius: 8px;
  border: 2px solid ${colors.white};
  background-color: transparent;
`

export const ButtonLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${colors.white};
  border-radius: 8px;
  border: 2px solid ${colors.white};
  background-color: transparent;
  text-decoration: none;
`
