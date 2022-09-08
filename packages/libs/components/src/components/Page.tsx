import React, { useState } from "react"
import CSS from 'csstype'
import { FAB } from "./Buttons"
import "../Style.css"
import { StyleProps } from "../types"

export enum RowAlign {
    LEFT="left", RIGHT="right", MID="mid"
}

interface RowAlignProps extends StyleProps {
    align?: RowAlign
}
interface RowProps extends RowAlignProps {
    space?: number | string
    spaceAround?: boolean
    children: React.ReactNode
}

export const Row: React.FC<RowProps> = ({className="", style={} as CSS.Properties, children, align=RowAlign.LEFT, space="20px", spaceAround=false}) => {
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
        <div className={"_Row " + alignStyle + " Row" + (className !== "" ? " " + className : "")} style={style}>
            {
                Array.isArray(children) ?
                    children.reduce((prev: JSX.Element[], curr: JSX.Element, i: number) => {
                        if(spaceAround && i === 0) prev.push(
                            <div key={"." + i} style={{width: space}} />
                        )
                        prev.push(curr)
                        if(spaceAround || i < children.length - 1) prev.push(
                            <div key={i + "."} style={{width: space}} />
                        )
                        return prev
                    }, [])
                :
                    spaceAround ? <div style={{paddingLeft: space, paddingRight: space}}> {children} </div> : children
            }
        </div>
    )
}

export enum SiteAlign {
    LEFT="left", TOP="top"
}

interface SiteAlignProps extends StyleProps {
    align?: SiteAlign
}

interface SiteProps extends SiteAlignProps {
    children: React.ReactNode
}

export const Site: React.FC<SiteProps> = ({children, style={} as CSS.Properties, className="", align=SiteAlign.TOP, 
}) => {
    let alignStyle = "__SiteLeft"
    if(align === SiteAlign.TOP) alignStyle = "__SiteTop"

    return (
        <div className={"_Site " + alignStyle + " Site" + (className !== "" ? " " + className : "")} style={style}>
            {children}
        </div>
    )
}

interface PageProps extends StyleProps {
    children: React.ReactNode
    leftWidth?: number | string
    mobile?: boolean
}

export const Page: React.FC<PageProps> = ({children, style={} as CSS.Properties, className="", leftWidth=false, mobile=false}) => {
    // Used to switch between site parts (if given)
    const [mobileSwitch, setMobileSwitch] = useState(false)

    if(Array.isArray(children) && children[1]) {
        if(!mobile)
            return (
                <div className={"_Page color0 Page" + (className !== "" ? " " + className : "")} style={style}>
                    <div className="__PageLeft" style={(leftWidth ? {width: leftWidth} : {}) as CSS.Properties}>
                        {children[0]}
                    </div>

                    <div className="__VerticalDividerWrapper">
                        <div className="_VerticalDivider VerticalDivider" />
                    </div>
    
                    <div className="__PageRight">
                        {children[1]}
                    </div>
                </div>
            )
        else {
            return (
                <div className={"_PageMobile color0 PageMobile" + (className !== "" ? " " + className : "")} style={style}>
                    <div className={!mobileSwitch ? "__PageMobileClosingWrapper" : "__PageMobileClosingWrapper __PageMobileClosingWrapperCollapsed"}>
                        {children[0]}

                        <div className="__PageMobileClosingWrapperSpacer" />
                    </div>
    
                    <div className={mobileSwitch ? "__PageMobileClosingWrapper" : "__PageMobileClosingWrapper __PageMobileClosingWrapperCollapsed"}>
                        {children[1]}

                        <div className="__PageMobileClosingWrapperSpacer" />
                    </div>
    
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
        if(!mobile)
            return (
                <div className={"_Page __PageH color0 Page" + (className !== "" ? " " + className : "")} style={style}>
                    {children}
                </div>
            )
        else {
    
    
            return (
                <div className={"_PageMobile __PageH color0 PageMobile" + (className !== "" ? " " + className : "")} style={style}>
                    {children}
                </div>
            )
        }
    }
}