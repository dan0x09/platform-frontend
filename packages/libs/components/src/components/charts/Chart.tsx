import React from "react"
import { 
    ResponsiveContainer, ComposedChart, 
    XAxis, YAxis, CartesianGrid, Legend, Tooltip,
    Line, Area
} from "recharts"
import CSS from 'csstype'
import { ChartData, ChartDataType, ChartProps } from '../prop-types'
import "../style.css"

const dataKeyX = "name"

function mapFormatter(value: number, name: string, data: ChartData[]) {
    const match = data.find(({yName}) => name === yName)
    if(match && match.displayTooltip) return match.displayTooltip(value, name)
    else return "" + value
}

const Chart: React.FC<ChartProps> = ({style={} as CSS.Properties, aspect=1.3, showLegend=true, upscaleLegend=false, maxHeight=undefined, data, displayX=v=>v}) => {
    return (
        <div style={{width: '100%'}}>
            <ResponsiveContainer debounce={300} aspect={aspect} maxHeight={maxHeight} width="100%">
                <ComposedChart style={style}>
                    <XAxis dataKey={dataKeyX} type="category" allowDuplicatedCategory={false} />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    {showLegend && <Legend verticalAlign="top" height={upscaleLegend ? 25 * data.length : 36} />}
                    <Tooltip formatter={(value: number, name: string) => mapFormatter(value, name, data)} />
                    {   // Chart data goes here
                        data.map(({yName, style={color: "#8884d8", backgroundColor: "#8884d8"}, type, points}) => {
                            const dataSet = points.map(([x, y]) => ({
                                [dataKeyX]: "" + displayX(x),
                                [yName]: y
                            }))
                            const {color = "#8884d8", backgroundColor = "#8884d8"} = style
                            switch(type) {
                                case ChartDataType.AREA:
                                    return <Area key={"" + yName} dataKey={yName} name={yName} 
                                        // @ts-ignore
                                        data={dataSet}
                                        type="monotone" fill={backgroundColor} stroke={color} />
                                // case ChartDataType.BAR:
                                //     return <Bar key={"" + yName} dataKey={yName} name={yName} fill={backgroundColor} stroke={color} />
                                default: //LINE
                                    return <Line key={"" + yName} dataKey={yName} name={yName} data={dataSet} type="monotone" stroke={color} />
                            }
                        })
                    }
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart