import { Translation } from "react-i18next"
import { Row, RowAlign } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"

interface WeatherData {
	id: number | string
	position: [number, number]
	currentWeather: string
}

const WeatherWidget = (silageId: string): WidgetState => {
	return {
		displayType: WidgetDisplayType.CUSTOM,
		getData: async() => {
			// async fetch of weather data based on geo location fetched from silage api
			return {
				id: silageId,
				position: [0, 0],
				currentWeather: "Fine."
			} as WeatherData
		},
		widgetComponent: ({data}) => {
			const {id, position, currentWeather} = data as WeatherData
			return (
				<div style={{width: '100%', height: '100%'}}>
					<Row align={RowAlign.LEFT} space="10%">
						<h2><Translation>{(t) => t("widgets.weather.title")}</Translation></h2>
						<h3>:{id}/{"[" + position[0] + "," + position[1] + "]"}</h3>
					</Row>

					<h3>{currentWeather}</h3>
				</div>
			)
		}
	}
}

export default WeatherWidget