import { Translation } from "react-i18next"
import { Chart, ChartData, ChartDataType, Row, Site } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"

interface MetaDataWidgetState extends WidgetState {
	getData?: () => Promise<SilageMetaData>
}

interface SilageMetaData {
	additionalSets: Array<ChartData>
}

const MetaWidget = (silageId: string): MetaDataWidgetState => {
	const t = (s: string) => <Translation>{(t) => t(s)}</Translation>

	return {
		widgetType: WidgetDisplayType.DATA,
		displayType: WidgetDisplayType.CUSTOM,
		title: t("widgets.metadata.title"),
		subtitle: t("widgets.metadata.subtitle"),
		subtitle1: t("widgets.metadata.subtitle1"),
		refreshText: t("widgets.all.refresh"),
		showText: t("widgets.all.show"),
		getData: async() => {
			// async fetch of silage meta data
			return {
				additionalSets: [{
					yName: 'data',
					points: [[0,0], [1,1], [2,3]],
					type: ChartDataType.BAR
				},{
					yName: 'data1',
					points: [[0,0], [1,1.5], [2,2.3]],
					style: {backgroundColor: 'tomato', color: 'tomato'},
					type: ChartDataType.BAR
				},{
					yName: 'data2',
					points: [[0,1.2], [1,0], [2,1.9]],
					style: {backgroundColor: 'yellow', color: 'yellow'},
					type: ChartDataType.BAR
				},{
					yName: 'data3',
					points: [[0,1], [1,1.2], [2,3.1]],
					style: {color: '#000'},
					type: ChartDataType.LINE
				}]
			}
		},
		getDataSets: async() => {
			return [{
				yName: 'data',
				points: [[0,0], [1,1], [2,3]],
				type: ChartDataType.PIE
			}, {
				yName: 'data1',
				points: [[0,0], [1,1], [2,3]],
				style: {color: '#000'},
				type: ChartDataType.PIE
			}]
		},
		displayComponent: ({widgetState, data, dataSets}) => {
			return (
				<Site>
					<h1>{widgetState?.title}</h1>

					<Row>
						<Chart 
							maxHeight={500}
							data={dataSets}
						/>

						<Chart 
							maxHeight={500}
							data={data.additionalSets}
						/>
					</Row>
				</Site>
			)
		}
	}
}

export default MetaWidget