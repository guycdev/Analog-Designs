import React from "react";
import { ReactSVG } from "react-svg";

export default function Subject(props) {

    const { icon, subject, setFormData, currentValue } = props

    function handleClick(event) {
        const value = event.currentTarget.childNodes[1].innerText
        setFormData(prev => {
            return (
                {
                    ...prev,
                    subject: value
                }
            )
        })
    }

    return (
        <div className={`subject ${currentValue == subject ? "clicked_svg" : ''}`} onClick={handleClick}>
            <ReactSVG
                src={icon}
                beforeInjection={(svg) => {
                    svg.setAttribute('name', subject)
                }}
            />
            <h6>{subject}</h6>
        </div>
    )
}