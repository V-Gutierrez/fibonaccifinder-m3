import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

  }

  body {
     -webkit-font-smoothing: antialiased;
     background-color: #8affff;


  }

  button {
   cursor: pointer;
  }`;

export default GlobalStyle;
