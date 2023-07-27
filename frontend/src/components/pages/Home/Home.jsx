import Hero from './Hero/Hero'
import Stack from './Stack/Stack'
import Pricing from './Pricing/Pricing '
import VideoObject from './VideoObject/VideoObject'
import ContactForm from './ContactForm/ContactForm'
import GettingStarted from './GettingStarted/GettingStarted'
import Steps from './Steps/Steps'
import React from 'react'

function App() {
    return (
        <main className="container" >
            <Hero />
            <GettingStarted />
            <Steps />
            <VideoObject
                sectionNumber={4}
                psudoContent={'Our Work'}
                direction={true}
                content={{
                    header: "See Our Work",
                    subheading: 'Check out these videos of our past projects to get a feel for what we do'
                }}
            />
            <VideoObject
                sectionNumber={5}
                psudoContent={'Our Designs'}
                direction={false}
                content={{
                    header: "Our Design Selection",
                    subheading: 'Check out these videos of our past projects to get a feel for what we do'
                }}
            />
            <Stack />
            <Pricing />

            <ContactForm />

        </main>
    )
}

export default App
