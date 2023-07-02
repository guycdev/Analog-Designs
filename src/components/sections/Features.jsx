import React from "react";
import Card from '../elements/Card'
import Swag from './Swag'
import focus from '../../assets/focus.jpg'
import speed from '../../assets/speed.jpg'
import close from '../../assets/close.png'
import legit from '../../assets/legit.png'

export default function Features(props) {
    const { logo, header, subHeader } = props
    return (
        <section className="why-us">
            <div className="why-us-container">
                <Card
                    id={0}
                    img={speed}
                    heading={"Fast-Track Approval"}
                    content={"Speed up your clients' loan approval process. Our ready to deploy packages ensure no delays in submitting your client's application whle preparing their digital footprint."}
                    styles={'test grey'}
                />
                <Card
                    id={0}
                    img={legit}
                    heading={"Amplify Legitimacy"}
                    content={"Stand out in the lending marketplace. Our design expertise crafts a professional online presence, enhancing your clients' credibility and showcasing them as serious, committed applicants."}
                    styles={'test grey'}
                />
                <Card
                    id={0}
                    img={close}
                    heading={"Boost Approval Odds"}
                    content={"Increase your clients' chances of loan approval. Our tailored online platforms efficiently display vital financial details, helping lenders quickly assess your clients' qualifications and repayment capabilities."}
                    styles={'test grey'}
                />
            </div>
        </section>
    )
}