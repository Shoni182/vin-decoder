import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Route index element={<App />} />
    <Route path="/variables" element={<VariablesList />} />
    <Route path="/variables/:variableId" element={<VariableDetail />} />
  </BrowserRouter>,
);
