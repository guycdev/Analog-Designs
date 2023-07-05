import React, { useState, useEffect } from 'react'
import svgThemeArr from '../../../assets/svgThemeArr'

export default function MobileNav(props) {

    const { theme } = props

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    const [dark, bright] = svgThemeArr

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    function toggleTheme() {
        theme.setTheme(prev => !prev)
    }

    return (
        <div className="misc-container">
            <p className='region'><em>ON, CA </em><span className='grey'>{`${time}`}</span></p>
            <button onClick={toggleTheme} className='button-theme'>
                {theme.theme ? bright : dark}
            </button>
        </div>
    )
}