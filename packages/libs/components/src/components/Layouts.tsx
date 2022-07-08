import React from "react"
import { GridLayoutProps, PageLayoutProps, SiteAlign } from './prop-types'
import CSS from 'csstype'
import "./style.css"
import { calculatePercentage } from "../lib/helper"

export const GridLayout: React.FC<GridLayoutProps> = ({children=[], style={} as CSS.Properties, width='90%', height='80vh', auto=false, columns=3, rows=2}) => {
    const containerStyle: CSS.Properties = {
        width: calculatePercentage(columns),
        height: calculatePercentage(rows)
    }

    return (
        <div className="__GridLayout" style={{...style, width: width, height: height}}>
            { auto ? 
            children.map((c, i) => (
                <div key={"" + i} style={containerStyle}>
                    {c}
                </div>
            ))
            : children }
        </div>
    )
}

export const PageLayout: React.FC<PageLayoutProps> = ({children, style={} as CSS.Properties, align=SiteAlign.TOP}) => {
    let styleAlign: string = "__SiteTop"
    if(align === SiteAlign.LEFT) styleAlign = "__SiteLeft"

    return (
        <div className={styleAlign + " __PageLayout"} style={style}>
            {children}
        </div>
    )

}