import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby'
import React from 'react';

export const globalColors = {
    brandGreen: '#529361',
}


export const StyledLinkGlobal = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    text-decoration: none;
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
}
`;

export const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  
    
    
  }
  html {
    margin: 0;  
  }
`