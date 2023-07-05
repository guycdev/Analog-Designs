import React from 'react'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Register from './components/pages/Auth/Register/Register.jsx'
import Login from './components/pages/Auth/Login/Login.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import Home from './components/pages/Home/Home'

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<HomeLayout />}>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route index element={<Home />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={route} />
  )
}