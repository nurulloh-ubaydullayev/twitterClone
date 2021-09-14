import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ThemeProvider } from "./Context/Theme";
import { LangProvider } from "./Context/Language";
import { Provider as TokenProvider } from "./Context/Authentication";
import { Provider as TweetsProvider } from "./Context/TweetsCtx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TweetsProvider>
        <TokenProvider>
          <LangProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LangProvider>
        </TokenProvider>
      </TweetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
