import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }
  
  body {
    margin: 0;
    background: #f6f6f6;
  }
  
  #root {
    width: 100vw;
    min-height: 100vh;
  }
`;
