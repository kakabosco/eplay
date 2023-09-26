import styled from 'styled-components'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
  padding-top: 340px;
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
