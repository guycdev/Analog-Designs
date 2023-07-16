import React from 'react'
import Steps from './Steps'
import AboutUs from './AboutUs'

export default function GettingStarted() {



    return (
        <section className="getting-started-container" id='getting-started'>
            {/* <Card
                heading='How does it work?'
                id={0}
                styles='fit-content'
                content={'A simple process taylored to your industry'}
            /> */}

            {/* <Blobs size="big" /> */}
            <Steps />
            <AboutUs />
        </section>
    )

}