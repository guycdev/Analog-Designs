import React from "react";
import plus from '../../../assets/logo.svg'
import { ReactSVG } from "react-svg"
import useFormSubmission from '../../hooks/useFormSubmission'
import styles from './Footer.module.css'
import Button from '../../elements/Button'


export default function Footer(props) {

    const { logo } = props
    const templateId = import.meta.env.VITE_EMAILJS_EMAIL_LIST;

    const { handleSubmit } = useFormSubmission(templateId);

    return (
        <footer className={styles.container}>
            <div>
                <div className={styles.logo}>
                    <ReactSVG src={plus} />
                    <h4>{logo}</h4>
                </div>
                <div className={styles.footerItems}>
                    <ul>
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
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className="misc-footer" id="footer-form">
                    <input type="email" name="email" placeholder="Enter your email" autoComplete="on" />
                    <Button />
                </form>
            </div>
        </footer>
    )
}