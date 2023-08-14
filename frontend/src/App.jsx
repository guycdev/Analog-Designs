import React from "react";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import HomeLayout from "./layouts/HomeLayout.jsx";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/DashboardHome/Dashboard";
import Order from "./pages/Dashboard/Order";
import DashboardContact from "./pages/Dashboard/DashboardContact/DashboardContact";
import DashboardHelp from "./pages/Dashboard/DashboardHelp";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route path="/account" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="order" element={<Order />} />
        <Route path="contact" element={<DashboardContact />} />
        <Route path="help" element={<DashboardHelp />} />
      </Route>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
