import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    list-style:none;
    box-sizing: border-box;
  }
  ul {
    margin:0;
    padding:0;
  }
`;

export { GlobalStyle };
export default GlobalStyle;
