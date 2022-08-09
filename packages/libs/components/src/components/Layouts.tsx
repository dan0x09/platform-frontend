import React from "react"
import { GridLayoutProps, PageLayoutProps, SiteAlign } from './prop-types'
import CSS from 'csstype'
import "./style.css"
import { calculatePercentage } from "../lib/helper"

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

export const PageLayout: React.FC<PageLayoutProps> = ({children, style={} as CSS.Properties, className="", align=SiteAlign.TOP}) => {
    let styleAlign: string = "__SiteTop"
    if(align === SiteAlign.LEFT) styleAlign = "__SiteLeft"

    return (
        <div className={styleAlign + " __PageLayout" + (className !== "" ? " " + className : "")} style={style}>
            {children}
        </div>
    )

}