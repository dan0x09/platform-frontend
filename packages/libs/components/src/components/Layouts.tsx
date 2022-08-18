import React from "react"
import CSS from 'csstype'
import "../Style.css"
import { calculatePercentage } from "../lib/helper"
import { StyleProps } from "../types"


interface GridLayoutProps extends StyleProps {
    children: Array<JSX.Element | boolean>
    auto?: boolean
    columns?: number
}

export const GridLayout: React.FC<GridLayoutProps> = ({children=[], style={} as CSS.Properties, className="", auto=false, columns=3}) => {
    const containerStyle: CSS.Properties = {
        width: calculatePercentage(columns)
    }

    return (
        <div className={"__GridLayout"  + (className !== "" ? " " + className : "")} style={style}>
            { auto ? 
            children.reduce((all, c, i) => {
                if(c) all.push(
                    <div key={"" + i} style={containerStyle}>
                        {c}
                    </div>
                )    
                return all
            }, [] as Array<JSX.Element>)
            : children }
        </div>
    )
}