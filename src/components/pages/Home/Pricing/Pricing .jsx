import React from "react";
import Card from '../../../elements/Card'
import PricingCard from './PricingCard'
import x from '../../../../assets/x.svg'
import checkMark from '../../../../assets/check.svg';



export default function Pricing(props) {
    return (
        <section className="margin-y getting-started-container" id="pricing">
            <Card
                heading='Pricing Plans'
                id={0}
                styles='fit-content'
                content={'Checkout our flexible packages'}
            />
            <div className="pricing-container">
                <PricingCard
                    heading={'Premium Recuring Package'}
                    content={'Perfect package for recuring costumers'}
                    pricing={'200'}
                    features={
                        [
                            ['5 websites minimum', checkMark],
                            ['Costume logos', x],
                            ['1 day delivery', x],
                            ['14 day hosting', x]
                        ]
                    }
                    styles='primary-plan'
                    btnStyle='secondary-btn'
                />
                <PricingCard
                    heading={'Premium Recuring Package'}
                    content={'Perfect package for recuring costumers'}
                    pricing={'200'}
                    features={
                        [
                            ['5 websites minimum', checkMark],
                            ['Costume logos', checkMark],
                            ['1 day delivery', checkMark],
                            ['14 day hosting', checkMark]
                        ]
                    }
                    styles='primary-plan'
                    btnStyle='primary-btn'
                />
                <PricingCard
                    heading={'Premium Recuring Package'}
                    content={'Perfect package for recuring costumers'}
                    pricing={'200'}
                    features={
                        [
                            ['5 websites minimum', checkMark],
                            ['Costume logos', x],
                            ['1 day delivery', x],
                            ['14 day hosting', x]
                        ]
                    }
                    styles='primary-plan'
                    btnStyle='secondary-btn'
                />
            </div>
        </section>
    )
}