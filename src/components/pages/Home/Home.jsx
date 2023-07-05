import { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import Stack from './Stack/Stack'
import Pricing from './Pricing/Pricing '
import Swag from './Features/Swag'
import VideoObject from './VideoObject/VideoObject'
import ContactForm from './ContactForm/ContactForm'
import GettingStarted from './GettingStarted/GettingStarted'
import { information, features } from './copyright/information'


function App() {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 0)
    }, [])


    return (
        <main className="container" style={{ display: !loading ? 'block' : 'block' }}>
            <Hero />
            <Swag
                id="features"
                featureArr={information}
                style='swag-container'
                tag={
                    {
                        name: "Features",
                        color: "#4CAF50"
                    }
                }
            />
            <GettingStarted />
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
            <Swag
                id='more-features'
                featureArr={features}
                style='features-grid'
                heading="We will build for you"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odio cum necessitatibus iste eum quibusdam."
            />
            <ContactForm />

        </main>
    )
}

export default App
