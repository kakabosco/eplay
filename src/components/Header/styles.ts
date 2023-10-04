import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.gray};

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 24px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
