import React, { useState } from "react"
import { Translation } from "react-i18next"
import { Button, Chart, ChartData, ChartDataType, Row, RowAlign, Site } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"

const testData = [
    {
      "timestamp": 1657782000000,
      "volume": 0.0
    },
    {
      "timestamp": 1657782900000,
      "volume": 55.3
    },
    {
      "timestamp": 1657783800000,
      "volume": 87.2
    },
    {
      "timestamp": 1657784700000,
      "volume": 112.3
    }
]

interface Silage3DModelData {
	address: string
}

const ModelWidget = (silageId: string): WidgetState => {
	const t = (s: string) => <Translation>{(t) => t(s)}</Translation>

	return {
		widgetType: WidgetDisplayType.DATA,
		displayType: WidgetDisplayType.CUSTOM,
		title: t("widgets.volume.title"),
		subtitle: t("widgets.volume.subtitle"),
		subtitle1: t("widgets.volume.subtitle1"),
		refreshText: t("widgets.all.refresh"),
		showText: t("widgets.all.show"),
		getData: async() => {
			// async fetch address of plot
			return {
				address: "example_silo.html"
			} as Silage3DModelData
		},
		getDataSets: async() => {
			// async fetch volume data
			return [{
				yName: "volume",
				displayTooltip: (value) => "" + value,
				style: {
					color: '#3B2D8F',
					backgroundColor: '#4A39B3'
				},
				type: ChartDataType.AREA,
				points: testData.map(({timestamp, volume}) => [timestamp, volume])
			} as ChartData]
		},
		displayComponent: ({widgetState: {title, subtitle, subtitle1, refreshText}, data, dataSets}, refresh) => {
			const {address} = data as Silage3DModelData
			return (
				<Site>
					<Row align={RowAlign.MID}>
						<h1>{title}</h1>

						<h3>{address}</h3>
					</Row>
					
					<Row>
                		<Button onClick={refresh}>{refreshText}</Button>

						<Chart data={dataSets} aspect={1} maxHeight={300} />

						<p>{subtitle1}</p>
					</Row>

					<Plot3DModel width={'990px'} height={'800px'} title="PlotLeft" debounceMs={2000} />

					<p>{subtitle}</p>
				</Site>
			)
		}
	}
}

interface Plot3DModelProps {
	width: number | string
	height: number | string
	title: string
	debounceMs: number
}

const Plot3DModel: React.FC<Plot3DModelProps> = ({width, height, title, debounceMs}) => {
	const [startLoading, setLoading] = useState(false)
	if(!startLoading) setTimeout(() => setLoading(true), debounceMs)

	return (
		<div style={{width, height, maxWidth: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>{
			startLoading ?
				<iframe style={{border: 'solid 2px #555', padding: 0, margin: 0, maxWidth: '98vw'}} title={title} src="../example_silo.html" width={width} height={height} /> 
				: "Loading..."
		}</div>
	)
}

export default ModelWidget