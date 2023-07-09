import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faUser } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../elements/Button'
import google from '../../../../assets/google.svg'
import apple from '../../../../assets/apple.svg'
import login from '../../../../assets/login.svg'
import logo from '../../../../assets/logo.svg'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Register() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(event) {
        const { value, name } = event.target

        setFormData(prev => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }

    function validatePassword(event) {
        const { value } = event.target;

        if (value.length < 5) {
            setErrorMessage('')
            return
        }

        if (value !== formData.password) {
            setErrorMessage("Passwords do not match");
        } else if (value === formData.password) {
            setErrorMessage("")
        }

        if (value.length < 8) {
            setErrorMessage("Password too short")
        } else if (!value.split('').find(letter => letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90)) {
            setErrorMessage("Password missing a capital letter")
        } else if (!value.split('').find(number => number.charCodeAt() >= 48 && number.charCodeAt() <= 57)) {
            setErrorMessage("Password missing a number")
        }
    }

    function handleSubmit() {
        return null
    }


    return (
        <div className='register-card'>
            <div className="main-form">
                <ReactSVG
                    src={logo}
                    beforeInjection={(svg) => {
                        svg.classList.add('login-logo')
                    }
                    }
                />
                <h2 className='contact-heading'>Register to Manage your Subscription</h2>
                <p className='register-p'>Enter your <span>information</span> to <span>create</span> your new <span>account</span></p>
                <div className="app-register">
                    <Button
                        buttonType="secondary-btn"
                        text="Sign up with Google"
                        img={google}
                    />
                    <Button
                        buttonType="secondary-btn"
                        text="Sign up with Apple"
                        img={apple}
                    />
                </div>
                <form className='register-form' id='register-form' onSubmit={errorMessage ? null : handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faUser} />
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id='name'
                            placeholder='John Doe'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="on"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder='example123@gmail.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="on"
                        />
                    </div>
                    <div className='registration-password'>
                        <div>
                            <label htmlFor="password">
                                <FontAwesomeIcon icon={faEye} />
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id='password'
                                placeholder='min 8 characters'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="on"
                            />
                        </div>
                        <div>
                            <label htmlFor="repeatPassword">
                                <FontAwesomeIcon icon={faEye} />
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="repeatPassword"
                                id='repeatPassword'
                                placeholder='min 8 characters'
                                onChange={validatePassword}
                                required
                                autoComplete="on"
                            />
                        </div>
                        {errorMessage && <motion.p
                            className='password-missmatch'
                            initial={{ top: 25 }}
                            animate={{
                                top: 55, transition: {
                                    type: "spring", stiffness: 200
                                }
                            }}

                        >{errorMessage}</motion.p>}
                    </div>
                    <Button buttonType="primary-btn" text="Sign Up" img={login} />
                </form>
                <Link to=".." className='wrong-page-link'>
                    Have an account ? <span>Login here</span>
                </Link>
                <pre className='grey copyright'>2023 Analog Designs. All right Reserved</pre>
            </div>
        </div>

    )

}