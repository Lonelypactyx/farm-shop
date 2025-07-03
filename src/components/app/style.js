import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  margin-left: calc(100vw - 100%);
}

body, p, fieldset, h4 {
  margin: 0;
}

body {
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackText};
  min-height: 100%;
}

a {
  text-decoration: none;
}

button {
  font-family: ${(props) => props.theme.fontFamily};
  border: none;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.page-wrapper {
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
}
`;
