import React from 'react'
import Blobs from '../../elements/Blobs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NavContent(props) {

    const { style, setIsClicked } = props

    return (
        <div className={`nav-links ${style}`}>
            <ul>
                <div className='nav-items'>
                    <li
                        onClick={setIsClicked}
                    >
                        <Link href="../#home">Home</Link>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <Link href="../#about-us">About Us</Link>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <Link href="../#gallery">Our Work</Link>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <Link href="../#pricing">Pricing</Link>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <Link href="../#contact">Contact Us</Link>
                    </li>
                </div>
                <div className='account-container'>
                    <motion.li
                        className='contact-container login'
                        whileHover={{
                            scale: 1.1,
                            color: 'white',
                            backgroundColor: '#4153ef'
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Blobs size="small" />
                        <Link
                            to={'account/'}
                        >
                            Login
                        </Link>
                    </motion.li>
                    <motion.li
                        className='contact-container register'
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: 'white'
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Blobs size="small" />
                        <Link
                            to={'account/register'}
                        >
                            Register
                        </Link>
                    </motion.li>
                </div>
            </ul>
        </div>
    )
}