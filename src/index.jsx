import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
