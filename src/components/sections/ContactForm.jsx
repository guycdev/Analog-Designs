import React, { useState } from 'react'
import Card from '../elements/Card'
import Form from '../elements/Form'
import contact from '../../assets/contact-us.png'


export default function ContactForm() {


    return (
        <section className='form-container' id="contact">
            <Card
                id={0}
            >
                <Form />
            </Card>
        </section>
    )
}