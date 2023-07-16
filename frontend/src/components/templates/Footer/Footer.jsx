import React from "react";
import plus from '../../../assets/logo.svg'
import { ReactSVG } from "react-svg"
import useFormSubmission from '../../hooks/useFormSubmission'


export default function Footer(props) {

    const { logo } = props
    const templateId = import.meta.env.VITE_EMAILJS_EMAIL_LIST;

    const { handleSubmit } = useFormSubmission(templateId);

    return (
        <footer className="footer-container">
            <div className="logos">
                <ReactSVG src={plus} />
                <h4>{logo}</h4>
            </div>
            <div className="footer-items">
                <ul>
                    <div className='nav-items'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#gallery">Our Work</a>
                        </li>
                        <li>
                            <a href="#Pricing">Pricing</a>
                        </li>
                    </div>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="misc-footer" id="footer-form">
                <input type="email" name="email" placeholder="Enter your email" autoComplete="on" />
                <button type="submit" >Subscribe</button>
            </form>
        </footer>
    )
}