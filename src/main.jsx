import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Register from './components/sections/Register'
import Login from './components/sections/Login'
import HomeLayout from './components/Layouts/HomeLayout.jsx'

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<HomeLayout />}>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route index element={<App />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
