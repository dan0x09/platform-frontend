import { fetchTemperatureData } from 'sgapi'
import { ChartDataPoint, ChartDataType } from 'sgcomponents'

import '../Style.css'
import { DataDisplayType, DataState } from '../types'

const Data1: DataState = 
{
	displayType: DataDisplayType.DATA,
	title: "Humidity",
	subtitle: "some data",
	text: ".......",
	subtitle1: "Humidity",
	text1: "some data about humidity",
	getDataSets: async () => {
		const 	d1 = await fetchTemperatureData() as Array<ChartDataPoint>,
				d2 = await fetchTemperatureData() as Array<ChartDataPoint>
		
		return [{
			yName: "Humidity field 0",
			type: ChartDataType.AREA,
			displayTooltip: (value) => value.toFixed(2),
			style: {
				color: "#2f536b",
				backgroundColor: "#447799"
			},
			points: d1
		}, {
			yName: "Humidity field 1",
			type: ChartDataType.LINE,
			displayTooltip: (value) => value.toFixed(2) + " °C",
			style: {
				color: "#CC4F38",
				backgroundColor: "#ff6347"
			},
			points: d2
		}]
	}
}


const Data2: DataState = 
{
	displayType: DataDisplayType.DATA,
	title: "Temperature",
	subtitle: "some data",
	text: "lisjdafbpo sjdnf üsoadn gfoinas ofinasodi füdinso füidsaj füpiasjd fpsadijüpfijh aw+psifjhdüaiudhfougsdufh h idhf uhäspoj dfsdhi sudpäofhaoufhgäapwih föuh äpeuwRFO UGSAÜFIJH säpidhf jäwoahf",
	subtitle1: "Temperature of the silos",
	text1: "some data about temperature",
	getDataSets: async () => {
		const d1 = await fetchTemperatureData() as Array<ChartDataPoint>
		
		return [{
			yName: "Temperature",
			type: ChartDataType.AREA,
			displayTooltip: (value) => value.toFixed(2),
			style: {
				color: "#CC4F38",
				backgroundColor: "#ff6347"
			},
			points: d1
		}]
	}
}

const Data3 : DataState = 
{
	displayType: DataDisplayType.DATA,
}

const Data4 : DataState = 
{
	displayType: DataDisplayType.DATA,
	title: "Something else",
	text: "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
}

export {
	Data1,
	Data2,
	Data3,
	Data4
}