import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  margin-bottom: 80px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.gray};

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 24px;

  .padding-bottom {
    padding-bottom: 0px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      margin-left: 8px;
    }

    span {
      display: none;
    }
  }
`

export const HamburgerMenu = styled.div`
  width: 24px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    background-color: ${colors.white};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
