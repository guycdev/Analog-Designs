import React from "react";
import Card from "../elements/Card"

export default function MediaObject(props) {

    const { header, subtitle, body, img, direction } = props

    const listItems = body.map((e, index) => {
        return (
            <li key={index}>
                {e}
            </li>
        )
    })

    return (
        <section className="media-object-container margin-y">
            <Card
                id={0}
            >
                <div>
                    <h3>{header}</h3>
                    <p>{subtitle}</p>
                    <ul>{listItems}</ul>
                </div>
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
            </Card>
        </section>
    )

}