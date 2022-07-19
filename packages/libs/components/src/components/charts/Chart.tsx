import React from "react"
import { 
    ResponsiveContainer, ComposedChart, 
    XAxis, YAxis, CartesianGrid, 
    Line, Area 
} from "recharts"
import { ChartDataType, ChartProps } from '../prop-types'
import CSS from 'csstype'
import "../style.css"
import { createDataSet } from "../../lib/helper"

const Chart: React.FC<ChartProps> = ({style={} as CSS.Properties, data}) => {
    const dataSet = createDataSet(data)

    return (
        <ResponsiveContainer>
            <ComposedChart data={dataSet} style={style}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                {
                    data.map(({yName, color="#8884d8", type}) => {
                        switch(type) {
                            case ChartDataType.AREA:
                                return <Area key={"" + yName} type="monotone" dataKey={yName} stroke={color} />
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