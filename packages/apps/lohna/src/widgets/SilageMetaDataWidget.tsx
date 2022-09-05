import { Translation } from "react-i18next"
import { ChartDataType } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"

interface SilageMetaData {
	id: number | string
	name: string
	date: string
	description: string
	customer: string
}

const MetaWidget = (silageId: string): WidgetState => {
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
				id: silageId,
				name: "Test silage",
				date: "22.08.2022",
				description: "Eine Silage mit Grassschnitt.",
				customer: "Customer " + (silageId + 1)
			} as SilageMetaData
		},
		getDataSets: async() => {
			return [{
				yName: 'data',
				points: [[0,0], [1,1], [2,3]],
				type: ChartDataType.AREA
			}]
		}
	}
}

export default MetaWidget