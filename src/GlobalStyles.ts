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
    min-height: 100vh;
    //height: 100vh;
    background: #f6f6f6;
  }
`;
