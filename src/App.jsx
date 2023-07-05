import React from 'react'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Register from './components/pages/Auth/Register/Register'
import Login from './components/pages/Auth/Login/Login'
import HomeLayout from './layouts/HomeLayout.jsx'
import Home from './components/pages/Home/Home'
import AuthLayout from './layouts/AuthLayout'

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<HomeLayout />}>
    <Route path='account' element={<AuthLayout />} >
      <Route index element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
    <Route index element={<Home />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={route} />
  )
}