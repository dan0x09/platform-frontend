
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

export enum RowAlign {
    LEFT="left", RIGHT="right", MID="mid"
}

export interface RowAlignProps extends StyleProps {
    align?: RowAlign
}

export interface RowProps extends RowAlignProps {
    space?: number | string
    spaceAround?: boolean
    children: JSX.Element[] | JSX.Element
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
    LINE="line", AREA="area", BAR="bar"
}

export type ChartDataPointX = number | string
export type ChartDataPointY = number

export type ChartDataPoint = [ChartDataPointX, ChartDataPointY]

export interface ChartDataStyle {
    color?: string
    backgroundColor?: string
}

export interface ChartData {
    yName: string
    displayTooltip?: (value: number, name: string) => [string, string] | string
    style?: ChartDataStyle
    type?: ChartDataType
    points: ChartDataPoint[] | [ChartDataPoint]
}

export interface ChartProps extends StyleProps {
    data: ChartData[] | [ChartData]
    sort?: boolean
    displayX?: (x: ChartDataPointX) => number | string
}