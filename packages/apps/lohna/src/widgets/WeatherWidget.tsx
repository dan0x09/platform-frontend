import { Translation } from "react-i18next"
import { Chart, ChartData, ChartDataType, Row, RowAlign } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import { getSilage } from "../lib/backendMock"

interface WeatherWidgetState extends WidgetState {
	getData?: () => Promise<WeatherData>
}

interface WeatherData {
	id: string
}

const WeatherWidget = (silageId: string): WeatherWidgetState => {
	return {
		displayType: WidgetDisplayType.CUSTOM,
		getData: async() => {
			// async fetch of weather data based on geo location fetched from silage api
			const r = await getSilage(silageId)
			return {
				id: r?.id || ""
			} as WeatherData
		},
		getDataSets: async() => {
			const r = await getSilage(silageId)
			return [{
				yName: "temperature",
				points: r?.weather.map(p => [p.timestamp, p.temp]),
				style: {
					color: "tomato"
				},
				displayTooltip: (value, name) => [value + "°C", name],
			} as ChartData,
			{
				yName: "rain",
				type: ChartDataType.AREA,
				points: r?.weather.map(p => [p.timestamp, p.rain]),
				displayTooltip: (value, name) => [value + "mm", name],
			} as ChartData]
		},
		widgetComponent: ({data, dataSets}) => {
			const {id} = data as WeatherData
			const [temp, rain] = dataSets
			return (
				<div style={{width: '100%', height: '100%'}}>
					<Row align={RowAlign.LEFT} space="10%">
						<h2><Translation>{(t) => t("widgets.weather.title")}</Translation></h2>
						
						<h3>:{id}</h3>
					</Row>

					<Chart
						displayX={(x) => (new Date(x)).getHours() + "h"}
						data={[temp]}
						maxHeight={150}
					/>

					<Chart
						displayX={(x) => (new Date(x)).getHours() + "h"}
						data={[rain]}
						maxHeight={150}
					/>
				</div>
			)
		}
	}
}

export default WeatherWidget