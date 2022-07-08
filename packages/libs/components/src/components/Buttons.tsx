import React, { useState } from "react"
import { FABProps } from './prop-types'
import CSS from 'csstype'
import "./style.css"


export const FAB: React.FC<FABProps> = ({toggle=false, style={} as CSS.Properties, styleActive={} as CSS.Properties, onClick, children=false}) => {
    const 
        [clicked, setClicked] = useState(false),
        click = () => {
            onClick()
            setClicked(toggle && !clicked)
        }

    return (
        <div>
            <input
                data-testid="button-input"
                className={"_FAB color2 FAB" + (clicked ? " _FABActive FABActive" : "")}
                style={!clicked ? style : {...style, ...styleActive}}
                type="button"
                onClick={click}
            ></input>
            {children}
        </div>
    )
}