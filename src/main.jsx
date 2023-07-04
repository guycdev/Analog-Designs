import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SignUp from './components/sections/SignUp'
import Nav from './components/sections/Nav'
import logo from './assets/logo.svg'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Nav logo={logo} name='Analog Designs' />}>
        <Route path='/' element={<App />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
