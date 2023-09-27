import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: ${(props) => (props.size === 'large' ? '8px 16px' : '4px 6px')};
  font-size: ${(props) => (props.size === 'large' ? '16px' : '10px')};
  font-weight: bold;
  border-radius: 8px;
  background-color: ${colors.highlightColor};
  color: ${colors.white};
`
