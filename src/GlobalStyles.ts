import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  #root {
    width: 100vw;
    height: 100vh;
    background: #f6f6f6;
  }
`;
