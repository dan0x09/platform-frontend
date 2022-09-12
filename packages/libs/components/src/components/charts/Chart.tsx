import React from "react"
import { 
    ResponsiveContainer, ComposedChart, 
    XAxis, YAxis, CartesianGrid, Legend, Tooltip,
    Line, Area, Bar, 
    PieChart, Pie
} from "recharts"
import CSS from 'csstype'

import "../../Style.css"
import { ChartData, ChartDataType, ChartDisplayXAxis, StyleProps } from "../../types"

const dataKeyX = "name"

function mapFormatter(value: number, name: string, data: ChartData[]) {
    const match = data.find(({yName}) => name === yName)
    if(match && match.displayTooltip) return match.displayTooltip(value, name)
    else return "" + value
}

interface ChartProps extends StyleProps {
    aspect?: number | undefined
    showLegend?: boolean
    maxHeight?: number | undefined
    data: Array<ChartData>
    displayX?: ChartDisplayXAxis
}

const Chart: React.FC<ChartProps> = (props) => {
    const isPie = props.data.length > 0 && props.data[0]?.type === ChartDataType.PIE
    return (
        isPie ? <PieComposed {...props} /> : <Composed {...props} />
    )
}


const extractBarData = (data: Array<ChartData>) => {
    let nData = [] as Array<any>
    let hasOne = false
    data.forEach(({
        yName,
        points,
        type
    }) => {
        if(type === ChartDataType.BAR) {
            if(hasOne) {
                points.forEach(([x, y]) => {
                    nData.forEach((obj) => {
                        if(obj[dataKeyX] === x) {
                            obj[yName] = y
                        }
                    })
                })
            }else {
                hasOne = true
                nData = points.map(([x, y]) => ({[dataKeyX]: x, [yName]: y}))
            }
        }
    })
    return nData
}

const Composed: React.FC<ChartProps> = ({style={} as CSS.Properties, className="", aspect=1.3, showLegend=true, maxHeight=undefined, data, displayX=v=>v}) => {
    return (
        <div style={{width: '100%'}}>
            <ResponsiveContainer debounce={300} aspect={aspect} maxHeight={maxHeight} width="100%">
                <ComposedChart style={style} data={extractBarData(data)} className={className}>
                    <XAxis dataKey={dataKeyX} type="category" allowDuplicatedCategory={false} />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    {showLegend && <Legend verticalAlign="top" height={50} />}
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
                                case ChartDataType.BAR:
                                    return <Bar key={"" + yName} dataKey={yName} name={yName} fill={backgroundColor} stroke={color} />
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

const pieSizes = [
    {
        inner: '70%',
        outer: '100%'
    },
    {
        inner: '35%',
        outer: '60%'
    },
    {
        inner: '0%',
        outer: '30%'
    }
]

const PieComposed: React.FC<ChartProps> = ({style={} as CSS.Properties, className="", maxHeight=undefined, data, displayX=v=>v}) => {
    return (
        <div style={{width: '100%'}}>
            <ResponsiveContainer debounce={300} maxHeight={maxHeight} width="100%" height={maxHeight}>
                <PieChart style={style} className={className}>
                    {
                        data.map(({
                            yName,
                            type,
                            style={color: "#8884d8", backgroundColor: "#8884d8"},
                            points
                        }, i) => {
                            if(i > 2) {
                                // TODO implement responsive Pie charts for x dataSets (currently 3)
                                return null
                            }

                            const dataSet = points.map(([x, y]) => ({
                                [dataKeyX]: "" + displayX(x),
                                [yName]: y
                            }))
                            switch(type) {
                                case ChartDataType.PIE:
                                    return <Pie 
                                        data={dataSet} dataKey={yName} 
                                        fill={style.backgroundColor} 
                                        innerRadius={pieSizes[i].inner} outerRadius={pieSizes[i].outer}
                                        paddingAngle={5}
                                        label={i === 0}
                                    />
                                default:
                                    return null
                            }
                        })
                    }
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart