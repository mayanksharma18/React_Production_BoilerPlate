import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import App from "./components/App";
import Dashboard from "./components/Dashboard/Dashboard";
import store from "./redux/store/configureStore";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);

/**
 * We recommend wrapping most or all of your components in the MsalProvider component. It's best to render the MsalProvider as close to the root as possible.
 */

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </MsalProvider>
);
