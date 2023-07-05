import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons'
import Card from '../elements/Card'
import Button from '../elements/Button'
import google from '../../assets/google.svg'
import apple from '../../assets/apple.svg'
import login from '../../assets/login.svg'
import logo from '../../assets/logo.svg'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
import MiscCard from '../elements/MiscCard'

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

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

    return (
        <section className="login-container">
            <Card
                id={0}
            >
                <div className='login-card'>
                    <div className="main-form">
                        <ReactSVG
                            src={logo}
                            beforeInjection={(svg) => {
                                svg.classList.add('login-logo')
                            }
                            }
                        />
                        <h2 className='contact-heading'>Login to an Existing Account</h2>
                        <p className='login-p'>Enter your <span>credentials </span>to access your<span> account</span></p>
                        <div className="app-login">
                            <Button
                                buttonType="secondary-btn"
                                text="Log in with Google"
                                img={google}
                            />
                            <Button
                                buttonType="secondary-btn"
                                text="Log in with Apple"
                                img={apple}
                            />
                        </div>
                        <form className='login-form' id='login-form'>
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
                            <Button buttonType="primary-btn" text="Send Message" img={login} />
                        </form>
                        <Link to="../register" className='wrong-page-link'>
                            Don't have an account ? <span>Register here</span>
                        </Link>
                        <pre className='grey copyright'>2023 Analog Designs. All right Reserved</pre>
                    </div>
                    <MiscCard />
                </div>
            </Card>
        </section>
    )
}