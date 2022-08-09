import React, { useState } from "react"
import { ButtonProps, FABProps } from './prop-types'
import CSS from 'csstype'
import "./style.css"


export const FAB: React.FC<FABProps> = ({toggle=false, style={} as CSS.Properties, className="", styleActive={} as CSS.Properties, onClick, children=false}) => {
    const 
        [clicked, setClicked] = useState(false),
        click = () => {
            onClick()
            setClicked(toggle && !clicked)
        }

    return (
        <div
            data-testid="button-input"
            className={"_FAB color2 FAB" + (clicked ? " _FABActive FABActive" : "") + (className !== "" ? " " + className : "")}
            style={!clicked ? style : {...style, ...styleActive}}
            onClick={click}
        >
            {children}
        </div>
    )
}

export const Button: React.FC<ButtonProps> = ({style={} as CSS.Properties, className="", onClick, children}) => {

    return (
        <div
            data-testid="button-input"
            className={"_Button color2 Button" + (className !== "" ? " " + className : "")}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    )
}