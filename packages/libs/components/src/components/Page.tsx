import React, { useState } from "react"
import "./style.css"
import CSS from 'csstype'
import { SiteAlign, SiteProps, PageProps, RowAlign, RowProps } from "./prop-types"
import { FAB } from "./Buttons"


export const Row: React.FC<RowProps> = ({children, align=RowAlign.LEFT, space="20px", spaceAround=false}) => {
    let alignStyle
    switch(align) {
        case RowAlign.MID:
            alignStyle = "__RowMid"
            break
        case RowAlign.RIGHT:
            alignStyle = "__RowRight"
            break
        default: // LEFT
            alignStyle = "__RowLeft"
            break
    }

    return (
        <div className={"_Row " + alignStyle + " Row"}>
            {
                Array.isArray(children) ?
                    children.reduce((prev: JSX.Element[], curr: JSX.Element, i: number) => {
                        if(spaceAround && i === 0) prev.push(
                            <div style={{width: space}} />
                        )
                        prev.push(curr)
                        if(spaceAround || i < children.length - 1) prev.push(
                            <div style={{width: space}} />
                        )
                        return prev
                    }, [])
                :
                    spaceAround ? <div style={{paddingLeft: space, paddingRight: space}}> {children} </div> : children
            }
        </div>
    )
}

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