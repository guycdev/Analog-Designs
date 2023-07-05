import React from "react";
import Card from '../../../elements/Card'
import { ReactSVG } from 'react-svg';
import Button from '../../../elements/Button'
import email from '../../../../assets//email.svg'
import Tag from '../../../elements/Tag'



export default function PricingCard(props) {
    const { heading, pricing, features, content, styles, btnStyle, img, tag } = props

    const renderFeatures = (features) => {
        if (!features) {
            return null;
        }

        return features.map((e, index) => (
            <p key={index} className="pricing-features">
                {e[0]}
                <ReactSVG src={e[1]} />
            </p>
        ));
    }

    return (
        <Card
            id={0}
            heading={heading}
            content={content}
            styles={styles}
            img={img}
        >
            <div className="pricing-details-container">
                {tag && <Tag
                    color={tag.color}
                    name={tag.name}
                    direction='top-left'
                />}
                {pricing && <p className="pricing">${pricing}<span className="small blue">/site</span></p>}
                {renderFeatures(features)}
                <Button
                    buttonType={btnStyle}
                    text='Contact Us'
                    variance={
                        {
                            scale: 1.1,
                            backgroundColor: '#ededed',
                            color: 'black',
                        }
                    }
                    img={email}
                />
            </div>
        </Card>
    )
}