import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { Layout } from "./components/Layout";
import { UserLogin } from "./components/user/UserLogin";
import { UserRegister } from "./components/user/UserRegister";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
