import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  grey: '#333',
  highlightColor: '#10ac84'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
  }

  body {
    background: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
