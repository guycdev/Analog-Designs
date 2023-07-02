import React, { useState } from 'react'
import Button from '../elements/Button'
import Confetti from 'react-confetti'
import send from '../../assets/send.svg'
import useFormSubmission from '../hooks/useFormSubmission'
import Subject from './Subject'
import consult from '../../assets/consult.svg'
import brush from '../../assets/brush.svg'
import pricing from '../../assets/pricing.svg'
import calander from '../../assets/calander.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import Blobs from './Blobs'

export default function Form(props) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        number: '',
        message: ''
    })

    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const { handleSubmit, messageStatus } = useFormSubmission(templateId);

    function handleChange({ target }) {
        const { name, value } = target

        setFormData(prev => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }
    console.log('rerendering')
    return (
        <div className="contact-card">
            <div>
                {/* <img src={gif} alt="" className='contact-img' /> */}
                <Blobs size="medium" contact={true} />
                {messageStatus == "success" && <Confetti
                    recycle={false}
                    numberOfPieces={1200}
                />}
            </div>
            <form onSubmit={handleSubmit} className='contact-form' id='contact-us'>
                <h2 className='contact-heading'>Book an Appointment</h2>
                <p className=''>Schedule an <span> appointment </span> or reach out for a <span> quote</span></p>
                <div >
                    <h6>Choose a Service</h6>
                    <div className="subject-selector">
                        <Subject
                            icon={consult}
                            subject='Consultation'
                            setFormData={setFormData}
                            currentValue={formData.subject}
                            handleChange={handleChange}
                        />
                        <Subject
                            icon={brush}
                            subject='Designs'
                            setFormData={setFormData}
                            currentValue={formData.subject}
                            handleChange={handleChange}
                        />
                        <Subject
                            icon={pricing}
                            subject='Pricing'
                            setFormData={setFormData}
                            currentValue={formData.subject}
                            handleChange={handleChange}
                        />
                        <Subject
                            icon={calander}
                            subject='Updates'
                            setFormData={setFormData}
                            currentValue={formData.subject}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <div className="name-container">
                    <div>
                        <label htmlFor="firstName">
                            <FontAwesomeIcon icon={faUser} />
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id='firstName'
                            placeholder='First name...'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            autoComplete="on"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            <FontAwesomeIcon icon={faUser} />
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder='Last name...'
                            required
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email...'
                        required
                        autoComplete="on"
                    />
                </div>
                <div>
                    <label htmlFor="number">
                        <FontAwesomeIcon icon={faPhone} />
                        Phone Number
                    </label>
                    <input
                        type="number"
                        name='number'
                        id='number'
                        value={formData.number}
                        onChange={handleChange}
                        placeholder='Phone Number...'
                        autoComplete="on"
                    />
                    <div>
                    </div>
                    <label htmlFor='message'>
                        <FontAwesomeIcon icon={faMessage} />
                        Message
                    </label>
                    <textarea
                        type="textarea"
                        name='message'
                        id='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Your message...'
                        required
                    />
                </div>
                <Button buttonType="secondary-btn" text="Send Message" img={send} messageStatus={messageStatus} />

            </form>
        </div>
    )
}