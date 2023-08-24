import React from "react";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Register, { action as registerAction } from "./pages/NewAuth/Register";
import Login, { action as loginAction } from "./pages/NewAuth/Login";
import HomeLayout from "./layouts/HomeLayout.jsx";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard, {
  loader as dashboardLoader,
} from "./pages/Dashboard/DashboardHome/Dashboard";
import DashboardOrder from "./pages/Dashboard/DashboardOrder/DashboardOrder";
import DashboardSupport from "./pages/Dashboard/DashboardSupport/DashboardSupport";
import DashboardHelp from "./pages/Dashboard/DashboardHelp";
import { loader } from "./loaders/authLoader";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route path="/account" element={<AuthLayout />}>
        <Route index element={<Login />} action={loginAction} />
        <Route path="register" element={<Register />} action={registerAction} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="order" element={<DashboardOrder />} loader={loader} />
        <Route path="support" element={<DashboardSupport />} loader={loader} />
        <Route path="help" element={<DashboardHelp />} loader={loader} />
      </Route>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
