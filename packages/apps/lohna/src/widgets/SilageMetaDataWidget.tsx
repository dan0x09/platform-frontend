import { Translation } from "react-i18next"
import { ChartDataType } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import { getSilage } from "../lib/backendMock"

interface MetaDataWidgetState extends WidgetState {
	getData?: () => Promise<SilageMetaData>
}

interface SilageMetaData {
	id: string
	name: string
	date: string
	description: string
	customer: string
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
			const r = await getSilage(silageId)
			return {
				id: r?.id || "",
				name: r?.name || "",
				date: r?.date || "",
				description: r?.description || "",
				customer: r?.customer || ""
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
				type: ChartDataType.PIE
			}]
		}
	}
}

export default MetaWidget