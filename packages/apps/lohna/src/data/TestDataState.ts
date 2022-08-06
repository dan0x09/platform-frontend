import { ChartDataType } from 'sgcomponents'

import '../Style.css'
import { DataState } from '../types'

const Data: DataState = 
{
	title: "Data",
	subtitle: "some data",
	text: ".......",
	subtitle1: "Humidity",
	text1: "some data about humidity",
	dataSets: [{
		yName: "Humidity field 0",
		type: ChartDataType.AREA,
		displayTooltip: (value) => value.toFixed(2),
		style: {
			color: "#2f536b",
			backgroundColor: "#447799"
		},
		points: []
	}, {
		yName: "Humidity field 1",
		type: ChartDataType.LINE,
		displayTooltip: (value) => value.toFixed(2) + " °C",
		style: {
			color: "#CC4F38",
			backgroundColor: "#ff6347"
		},
		points: []
	}]
}

export default Data