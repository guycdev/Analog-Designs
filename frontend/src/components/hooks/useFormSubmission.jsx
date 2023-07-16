import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


export default function useFormSubmission(templateId) {

    const [messageStatus, setMessageStatus] = useState('')

    function handleSubmit(event) {

        setMessageStatus('loading')

        event.preventDefault()

        const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

        emailjs.sendForm(serviceId, templateId, event.target, apiKey)
            .then(resp => {
                if (resp) {
                    console.log(`Success: \n ${resp.text}`)
                    setMessageStatus('success')
                } else {
                    console.log(`Failure: \n ${resp.text}`)
                    setMessageStatus('error')
                }
            }
            )
    }
    return { handleSubmit, messageStatus }
}