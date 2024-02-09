import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";

import App from "./App";
import { awTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={awTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
