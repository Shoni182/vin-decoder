// import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import VariableDetail from "./pages/VariableDetailPage/VariableDetailPage";
import VariablesList from "./pages/VariablesListPage/VariablesListPage";
import NavLayout from "./components/NavLayout/NavLayout";

import { Route, Routes } from "react-router";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/variables" element={<VariablesList />} />
          <Route path="/variables/:variableId" element={<VariableDetail />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
