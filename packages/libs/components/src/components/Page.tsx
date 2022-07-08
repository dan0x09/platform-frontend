import React, { useState } from "react"
import "./style.css"
import CSS from 'csstype'
import { SiteAlign, SiteProps, PageProps } from "./prop-types"
import { FAB } from "./Buttons"


export const Site: React.FC<SiteProps> = ({children, style={} as CSS.Properties, align=SiteAlign.TOP, 
}) => {
    let alignStyle = "__SiteLeft"
    if(align === SiteAlign.TOP) alignStyle = "__SiteTop"

    return (
        <div className={"_Site " + alignStyle + " Site"} style={style}>
            {children}
        </div>
    )
}

export const Page: React.FC<PageProps> = ({children, style={} as CSS.Properties, leftWidth=false}) => {
    const isMobile = false // TODO add mobile detection
    // Used to switch between site parts (if given)
    const [mobileSwitch, setMobileSwitch] = useState(false)

    if(children[1]) {
        if(!isMobile)
            return (
                <div className="_Page color0 Page" style={style}>
                    <div className="__PageLeft" style={(leftWidth ? {width: leftWidth} : {}) as CSS.Properties}>
                        {children[0]}
                    </div>
    
                    <div className="__PageRight">
                        {children[1]}
                    </div>
                </div>
            )
        else {
            
            return (
                <div className="_PageMobile color0 PageMobile">
                    {!mobileSwitch && children[0]}
    
                    {mobileSwitch && children[1]}
    
                    <FAB
                        toggle
                        onClick={() => setMobileSwitch(!mobileSwitch)}
                    />
                </div>
            )
        }
    } 
    else 
    {
        if(!isMobile)
            return (
                <div className="_Page __PageH color0 Page" style={style}>
                    {children}
                </div>
            )
        else {
    
    
            return (
                <div className="_PageMobile __PageH color0 PageMobile">
                    {children}
                </div>
            )
        }
    }
}