import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider.jsx";
import { SampleProvider } from "./contexts/SampleContext/SampleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SampleProvider>
          <App />
        </SampleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
