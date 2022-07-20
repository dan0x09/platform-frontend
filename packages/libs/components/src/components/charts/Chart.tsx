import React from "react"
import { 
    ResponsiveContainer, ComposedChart, 
    XAxis, YAxis, CartesianGrid, 
    Line, Area, Bar
} from "recharts"
import { ChartDataType, ChartProps } from '../prop-types'
import CSS from 'csstype'
import "../style.css"
import { createDataSet } from "../../lib/helper"

const dataKeyX = "name"

const Chart: React.FC<ChartProps> = ({style={} as CSS.Properties, data, sort=false, displayX=v=>v}) => {
    const dataSet = createDataSet(dataKeyX, data, sort)
    // Change values according to display function
    dataSet.forEach(point => {
        point[dataKeyX] = displayX(point[dataKeyX])
    })

    return (
        <ResponsiveContainer>
            <ComposedChart data={dataSet} style={style}>
                <XAxis dataKey={dataKeyX} />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                {   // Chart data goes here
                    data.map(({yName, color="#8884d8", type}) => {
                        switch(type) {
                            case ChartDataType.AREA:
                                return <Area key={"" + yName} type="monotone" dataKey={yName} stroke={color} />
                            case ChartDataType.BAR:
                                return <Bar key={"" + yName} dataKey={yName} stroke={color} />
                            default: //LINE
                                return <Line key={"" + yName} type="monotone" dataKey={yName} stroke={color} />
                        }
                    })
                }
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default Chart