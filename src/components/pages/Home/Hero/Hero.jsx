import React from 'react'
import arrow from '../../../../assets/arrow.svg'
import { motion } from "framer-motion"
import Circles from '../../../elements/Circles'
import Blobs from '../../../elements/Blobs'
import Tag from '../../../elements/Tag'
import Button from '../../../elements/Button'
import whiteArrow from '../../../../assets/white-arrow.svg'
import designImg from '../../../../assets/sideimg.png'
import hostImg from '../../../../assets/hosting.png'
import applicationImg from '../../../../assets/application.svg'
import Card from '../../../elements/Card'


export default function Hero(props) {

    const sectionVariance = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            delay: 0.2,
            duration: 1.3,
            ease: 'easeInOut'
        }
    }

    return (
        <motion.section
            initial="initial"
            animate="animate"
            variants={sectionVariance}
            transition={sectionVariance.transition}
            className="hero-section section-background"
            id='home'
        >
            <motion.div className="content-block card "
                drag
                dragConstraints={{ left: -0, right: 0, top: 0, bottom: -0 }}
                dragElastic={0.25}
            >
                <div className="main-content">
                    <p>
                        <em className='body-em'>
                            Design Your Success
                        </em>
                    </p>
                    <h1 className='welcome-heading'>Efficiency Meets <span>Credibility:</span> Creating a Streamlined <span>Online Presence</span></h1>
                    <p className='subheading'>
                        An efficient solution to creating an online presence for borrowers
                    </p>
                    <div className="btn-container">
                        <Button
                            buttonType="primary-btn"
                            text="Live Demos"
                            variance={
                                {
                                    scale: 1.1,
                                    backgroundColor: '#ededed',
                                    color: 'black',
                                }
                            }
                            img={whiteArrow}
                            hoverImg={arrow}
                        />
                        <Button
                            buttonType='secondary-btn'
                            variance={
                                {
                                    scale: 1.1,
                                    backgroundColor: "#007BFF",
                                    color: 'white',
                                }
                            }
                            text="Learn More"
                            img={arrow}
                            hoverImg={whiteArrow}
                        />
                    </div>
                </div>
                <hr className='main-hr' />
                <div className="container-footer">
                    <div className="stat-items">
                        <Circles />
                        <p className='small-p'>Building an online presence that banks<span> value and trust </span></p>
                        <Tag
                            name="Welcome"
                            color="#007BFF"
                        />
                    </div>
                </div>
                <Blobs size="big" />
            </motion.div>
            <div className="swag-block">
                <Card
                    id={1}
                    img={designImg}
                    heading={'Design Selection'}
                    content={'Select from a wide array of pre-existing or costume designs'}
                    direction='left-card first-eat-up'
                    styles='compress-p'
                />
                <Card
                    id={2}
                    img={hostImg}
                    heading={'Web Hosting'}
                    content={'We ensure your online presence is impactful and uninterrupted'}
                    direction='right-card'
                    styles='compress-p'
                />
                <Card
                    id={3}
                    img={applicationImg}
                    heading={'Income Verification'}
                    content={'Strengthen your applications with a credible online presence'}
                    direction='left-card'
                    styles='compress-p'
                />
            </div>
        </motion.section>
    )
}