import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FacebookProvider } from "@kazion/react-facebook-login";
import "./index.css";
import "./Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="802553031918-9hejgedacvdnsk7s2ts8m2u1a4g45822.apps.googleusercontent.com">
            <FacebookProvider appId="537321392226837" version="v19.0">
              <App />
            </FacebookProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
