import React from "react"
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts"
import { ChartProps } from '../prop-types'
import CSS from 'csstype'
import "./style.css"


export const FAB: React.FC<ChartProps> = ({style={} as CSS.Properties}) => {
    const data = [
        [0, 1],
        {x: 20, y: 30}
    ]

    return (
        <LineChart width={500} height={300} data={data} style={style}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    )
}