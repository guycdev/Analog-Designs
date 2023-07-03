import React, { useState, useEffect } from 'react'
import DesktopNav from '../elements/DesktopNav'
import MobileNav from '../elements/MobileNav'

export default function Nav(props) {
    const { logo, name, theme } = props

    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 775)


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth <= 775)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        windowWidth ?
            <MobileNav
                logo={logo}
                name={name}
                theme={theme}
            /> :
            <DesktopNav
                logo={logo}
                name={name}
                theme={theme}
            />
    )
}