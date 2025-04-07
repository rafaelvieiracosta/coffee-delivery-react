import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  img,
  svg {
    display: block;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
