import { Row, RowAlign } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"

interface SilageMetaData {
	id: number | string
	name: string
	date: string
	description: string
	customer: string
}

const MetaWidget = (silageId: string): WidgetState => {
	return {
		displayType: WidgetDisplayType.CUSTOM,
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
		widgetComponent: ({data}) => {
			const {id, name, date, description, customer} = data as SilageMetaData
			return (
				<div style={{width: '100%', height: '100%'}}>
					<Row align={RowAlign.LEFT} space="10%">
						<h2>{name}</h2>
						<h3>:{id}/{date}</h3>
					</Row>

					<h3>{customer}</h3>

					<p>{description}</p>
				</div>
			)
		}
	}
}

export default MetaWidget