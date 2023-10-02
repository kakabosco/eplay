import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  position: relative;
  padding: 8px;
  border-radius: 8px;
  background-color: ${colors.gray};
  text-decoration: none;
  color: ${colors.white};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
