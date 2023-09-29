import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding-top: 340px;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
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
