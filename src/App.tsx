import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { ResetStyle } from "./styles/reset";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>coffee-delivery</h1>

      <ResetStyle />
      <GlobalStyle />
    </ThemeProvider>
  );
}
