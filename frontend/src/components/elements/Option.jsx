import React from 'react'
import { ReactSVG } from 'react-svg';
import numbers from '../../assets/numbers.svg'

export default function Option(props) {

    const { options, isSelected, onClick } = props

    const { header, subHeader, icon, video } = options

    const container = isSelected ? "selected-row" : "unselected-row"

    return (
        <div className={`row ${container}`} onMouseOver={onClick} onClick={onClick}>
            <ReactSVG src={numbers} />
            <div>
                <h4>{header}</h4>
                <p>{subHeader}</p>
            </div>
        </div>
    )
}