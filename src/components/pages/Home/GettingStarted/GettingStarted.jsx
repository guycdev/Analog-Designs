import React from 'react'
import PricingCard from "../Pricing/PricingCard"
import Card from '../../../elements/Card'
import createAccount from '../../../../assets/create-account.jpg'
import ticket from '../../../../assets/ticket.jpg'
import coding from '../../../../assets/coding.png'

export default function GettingStarted() {

    const tag = {
        color: '#9c9ced',
        name: 'Steps'
    }

    return (
        <section className="getting-started-container" id='getting-started'>
            {/* <Card
                heading='How does it work?'
                id={0}
                styles='fit-content'
                content={'A simple process taylored to your industry'}
            /> */}
            <div>
                <PricingCard
                    heading="Create Account"
                    content="Set up an account with our integrated system. This lets you monitor your present and future orders conveniently."
                    btnStyle="primary-btn"
                    img={createAccount}
                    tag={tag}
                />
                <PricingCard
                    heading="Open a Ticket"
                    content="Select from our extensive range of design templates and packages then open a ticket with your specific request."
                    btnStyle="primary-btn"
                    img={ticket}
                    tag={tag}
                />
                <PricingCard
                    heading="We Handle the Rest"
                    content="Once we have your details, we manage the building and hosting of your client's site.  Be sure to follow up upon approval."
                    btnStyle="primary-btn"
                    img={coding}
                    tag={tag}
                />
            </div>
            {/* <Blobs size="big" /> */}

        </section>
    )

}