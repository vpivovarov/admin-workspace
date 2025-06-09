import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "./components";
import { ErrorBoundary } from "./error";
import { awTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={awTheme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </ErrorBoundary>
);
