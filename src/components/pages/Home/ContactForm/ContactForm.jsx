import React, { useState } from 'react'
import Form from './Form'
import Card from '../../../elements/Card'

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