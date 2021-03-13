import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { GlobalStyle, theme } from "./asset/style";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
