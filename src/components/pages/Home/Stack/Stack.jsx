import React from "react";
import Card from '../../../elements/Card'
import wixx from '../../../../assets/wixx.png'
import shopify from '../../../../assets/shopify.jpg'
import wordPress from '../../../../assets/wp.png'
import squareSpace from '../../../../assets/ss.jpg'
import costume from '../../../../assets/costum.jpg'
import styles from './Stack.module.css'

export default function Stack() {

    return (
        <section className={`${styles.stackContainer}`}>
            <div className={`${styles.stackCardContainer}`}>
                <Card
                    id={1}
                    img={wixx}
                    styles={styles.stackCard}
                />
                <Card
                    id={2}
                    img={wordPress}
                    styles={styles.stackCard}
                />
                <Card
                    id={3}
                    img={costume}
                    styles={styles.stackCard}
                />
                <Card
                    id={4}
                    img={squareSpace}
                    styles={styles.stackCard}
                />
                <Card
                    id={5}
                    img={shopify}
                    styles={styles.stackCard}
                />
            </div>
        </section>
    )


}