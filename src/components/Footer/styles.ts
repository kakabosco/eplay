import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { colors } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  background-color: ${colors.gray};
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`

export const LinkItem = styled(Link)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 32px;
`
