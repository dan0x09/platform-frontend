
import CSS from 'csstype'

export interface StyleProps {
    style?: CSS.Properties
}

export interface GridLayoutProps extends StyleProps {
    children: JSX.Element[]
    width?: number | string
    height?: number | string
    auto?: boolean
    columns?: number
    rows?: number
}

export enum SiteAlign {
    LEFT="left", TOP="top"
}

export interface SiteAlignProps extends StyleProps {
    align?: SiteAlign
}

export interface PageLayoutProps extends SiteAlignProps {
    children: [JSX.Element, JSX.Element, JSX.Element]
}

export interface SiteProps extends SiteAlignProps {
    children: JSX.Element[] | JSX.Element
}

export interface PageProps extends StyleProps {
    children: [JSX.Element, JSX.Element] | [JSX.Element]
    leftWidth?: number | string
}

export interface ClickableProps extends StyleProps {
    onClick: () => void
}

export interface ButtonProps extends ClickableProps {
    children?: JSX.Element[] | [JSX.Element] | string
}

export interface FABProps extends ClickableProps {
    toggle?: boolean
    styleActive?: CSS.Properties
    children?: JSX.Element
}

export enum ChartDataType {
    LINE="line", AREA="area"
}

export type ChartDataPointX = number | string
export type ChartDataPointY = number

export type ChartDataPoint = [ChartDataPointX, ChartDataPointY]

export interface ChartData {
    yName: string
    color?: string
    type?: ChartDataType
    points: ChartDataPoint[] | [ChartDataPoint]
}

export interface ChartProps extends StyleProps {
    data: ChartData[] | [ChartData]
    sort?: boolean
    displayX?: (x: ChartDataPointX) => number | string
    displayY?: (y: ChartDataPointY) => number | string
}