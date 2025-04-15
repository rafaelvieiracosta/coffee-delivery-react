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
    border: none;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
