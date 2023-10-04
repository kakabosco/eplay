import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  padding-top: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
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

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Infos = styled.div`
  max-width: 380px;
  padding: 32px;
  background-color: ${colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    font-size: 18px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
