import designImg from '../../../../assets/sideimg.png'
import hostImg from '../../../../assets/hosting.png'
import applicationImg from '../../../../assets/application.svg'
import Card from '../../../elements/Card'


export default function FloatingImages() {
    return (
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
    )
}