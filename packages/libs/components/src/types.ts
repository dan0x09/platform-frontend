import React from 'react'

export interface StyleProps {
    style?: React.CSSProperties
    className?: string
}

export interface ClickableProps extends StyleProps {
    onClick: () => void
}

export enum ChartDataType {
    LINE="line", AREA="area", BAR="bar", PIE="pie"
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
    points: Array<ChartDataPoint>
}

export type ChartDisplayXAxis = (x: ChartDataPointX) => string | number

