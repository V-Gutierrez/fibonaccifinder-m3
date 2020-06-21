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
     background: url("https://cdn-cv.r4you.co/wp-content/uploads/2016/12/fibonacci_book4.jpg");
     background-size: cover;
  }

  button {
   cursor: pointer;
  }`;

export default GlobalStyle;
