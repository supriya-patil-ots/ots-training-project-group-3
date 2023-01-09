import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="275703750791-ievo74l4ln5lgvlri7bj4csdamsuqvfa.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// client-id:- 275703750791-ievo74l4ln5lgvlri7bj4csdamsuqvfa.apps.googleusercontent.com
// client-secret:-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
