import React from "react";
import Card from '../elements/Card'
import wixx from '../../assets/wixx.png'
import shopify from '../../assets/shopify.jpg'
import wordPress from '../../assets/wp.png'
import squareSpace from '../../assets/ss.jpg'
import costume from '../../assets/costum.jpg'

export default function Stack() {

    return (
        <section className="stack-container section-background">
            <div className="stack-card-container">
                <Card
                    id={1}
                    img={wixx}
                    styles={"stack-card"}
                />
                <Card
                    id={2}
                    img={wordPress}
                    styles={"stack-card"}
                />
                <Card
                    id={3}
                    img={costume}
                    styles={"stack-card"}
                />
                <Card
                    id={4}
                    img={squareSpace}
                    styles={"stack-card"}
                />
                <Card
                    id={5}
                    img={shopify}
                    styles={"stack-card"}
                />
            </div>
        </section>
    )


}