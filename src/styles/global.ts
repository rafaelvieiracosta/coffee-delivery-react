import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
  }

  :focus-visible:not(input) {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.brand_purple};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  .row {
    max-width: 72rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;
