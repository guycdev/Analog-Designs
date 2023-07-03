import { useState, useEffect } from 'react'
import logo from './assets/logo.svg'
import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Stack from './components/sections/Stack'
import Pricing from './components/sections/Pricing '
import Swag from './components/sections/Swag'
import VideoObject from './components/sections/VideoObject'
import Footer from './components/sections/Footer'
import ContactForm from './components/sections/ContactForm'
import GettingStarted from './components/sections/GettingStarted'
import { information, features } from './copyright/information'
import Loader from './components/sections/Loader'


function App() {
  const [theme, setTheme] = useState(true)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 0)
  }, [])

  return (
    <div>
      {/* <Loader length={7} loading={loading} /> */}
      <div className="container" style={{ display: !loading ? 'block' : 'block' }}>
        <Nav logo={logo} name='Analog Designs' theme={{ theme, setTheme }} />
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
        <Footer
          logo="Analog Designs"
        />
      </div>
    </div>
  )
}

export default App
