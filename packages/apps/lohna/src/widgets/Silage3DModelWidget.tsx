import React, { useState } from "react"
import { Translation } from "react-i18next"
import { Button, Chart, ChartData, ChartDataType, Row, RowAlign, Site } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import { getSilage } from "../lib/backendMock"

interface ModelWidgetState extends WidgetState {
	getData?: () => Promise<Silage3DModelData>
}

interface Silage3DModelData {
	volume: number
	plotAddress: string
	imgAddress: string
}

const ModelWidget = (silageId: string): ModelWidgetState => {
	const t = (s: string) => <Translation>{(t) => t(s)}</Translation>

	return {
		widgetType: WidgetDisplayType.DATA,
		displayType: WidgetDisplayType.CUSTOM,
		title: t("widgets.volume.title"),
		subtitle: t("widgets.volume.subtitle"),
		text: t("widgets.volume.text"),
		subtitle1: t("widgets.volume.subtitle1"),
		text1: t("widgets.volume.text1"),
		refreshText: t("widgets.all.refresh"),
		showText: t("widgets.all.show"),
		getData: async() => {
			// async fetch address of plot
			const r = await getSilage(silageId)
			return {
				volume: r?.volume || 0,
				plotAddress: r?.plotAddress || "",
				imgAddress: r?.imgAddress || ""
			}
		},
		getDataSets: async() => {
			// async fetch volume data
			const r = await getSilage(silageId)
			return [{
				yName: "volume",
				displayTooltip: (value, name) => ["" + value + " m^3", name],
				style: {
					color: '#3B2D8F',
					backgroundColor: '#4A39B3'
				},
				type: ChartDataType.AREA,
				points: r?.volumeTimeSeries.map(p => [p.timestamp, p.volume])
			} as ChartData]
		},
		displayX: x => (new Date(x)).getHours() + ":" + (new Date(x)).getMinutes() + " h",
		displayComponent: ({widgetState: {title, subtitle, subtitle1, text, text1, refreshText, displayX}, data, dataSets}, refresh) => {
			const {volume, plotAddress, imgAddress} = data as Silage3DModelData
			return (
				<Site>
					<Row align={RowAlign.MID}>
						<h1>{title}</h1>

						<h3>{plotAddress}</h3>
					</Row>

					<p>{text}{volume} m^3.</p>
					
					<Row style={{maxWidth: '90%'}}>
                		<Button onClick={refresh}>{refreshText}</Button>

						<Chart data={dataSets} aspect={1} maxHeight={300} 
							displayX={displayX}
						/>
					</Row>

					<p>{text1}</p>

					<Plot3DModel src={plotAddress} width={'990px'} height={'800px'} title="PlotLeft" debounceMs={2000} />

					<p>{subtitle}</p>

					<img alt="" src={imgAddress}></img>
				</Site>
			)
		}
	}
}

interface Plot3DModelProps {
	src: string
	width: number | string
	height: number | string
	title: string
	debounceMs: number
}

const Plot3DModel: React.FC<Plot3DModelProps> = ({src, width, height, title, debounceMs}) => {
	const [startLoading, setLoading] = useState(false)
	if(!startLoading) setTimeout(() => setLoading(true), debounceMs)

	return (
		<div style={{width, height, maxWidth: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>{
			startLoading ?
				<iframe style={{border: 'solid 2px #555', padding: 0, margin: 0, maxWidth: '98vw'}} title={title} src={src} width={width} height={height} /> 
				: "Loading..."
		}</div>
	)
}

export default ModelWidget