import { ChartData } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import "../Style.css"


const Widget = (): WidgetState => {

	return {
		displayType: WidgetDisplayType.DATA,
		title: "Evaluation",
		subtitle: "Ein Widget, welches während der Evaluation enstanden ist.",
		refreshText: "Neu laden",
		showText: "Anzeigen",
		getDataSets: async() => {

			return [
				{
					yName: "Evaluationsdaten",
					points: [
						[0, 0],
						[21, 1]
					]
				} as ChartData
			]
		},
		// widgetComponent: ({widgetState, data, dataSets}, show, refresh) => { 
		// 	return null
		// },
		// displayComponent: ({widgetState, data, dataSets}, refresh) => {
		// 	return null
		// }
	}
}

export default Widget