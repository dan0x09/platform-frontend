import { ChartData } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import "../Style.css"


const Widget = (): WidgetState => {

	return {
		widgetType: WidgetDisplayType.DATA,
		displayType: WidgetDisplayType.DATA,
		title: "Evaluation",
		big: true,
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
		// widgetComponent: (widgetStateWrapper, show) => {
		// 	const {widgetState, dataSets} = widgetStateWrapper
		// 	const {title} = widgetState
			
		// 	return (
		// 		<div style={{width: '100%', height: '100%'}}>
					
		// 		</div>
		// 	)
		// }
	}
}

export default Widget