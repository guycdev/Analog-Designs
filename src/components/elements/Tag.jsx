import React from 'react'

export default function (props) {

    const { color, name, direction } = props

    return (
        <div className={`tag ${name} ${direction ? direction : ''}`}>
            <p >{name}</p>
            <style>
                {`
                    .tag.${name} p::before {
                        height: 8px;
                        width: 8px;
                        display: block;
                        content: "";
                        border-radius: 50%;
                        background-color: ${color};
                        position: absolute;
                        right: 100%;
                        margin: 0px 5px
                    }
                `}
            </style>
        </div>
    )
}