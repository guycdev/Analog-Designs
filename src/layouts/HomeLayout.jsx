import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/templates/Nav/Nav'
import logo from '../assets/logo.svg'
import Footer from '../components/templates/Footer/Footer'


export default function HomeLayout() {
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);
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