import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${colors.gray};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
