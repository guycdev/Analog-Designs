import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../sections/Nav'
import logo from '../../assets/logo.svg'
import Footer from '../sections/Footer'


export default function HomeLayout() {
    return (
        <>
            <Nav logo={logo} name='Analog Designs' />
            <Outlet />
            <Footer
                logo="Analog Designs"
            />
        </>
    )
}