import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  max-width: 460px;
  font-size: 36px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
