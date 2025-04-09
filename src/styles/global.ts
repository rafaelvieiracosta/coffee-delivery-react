import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    --font_family_primary: "Roboto", sans-serif;
    --font_family_secondary: "Baloo 2", sans-serif;

    font-family: var(--font_family_primary);
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
