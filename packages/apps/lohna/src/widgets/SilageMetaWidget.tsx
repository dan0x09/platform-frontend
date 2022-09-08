import { Row, RowAlign } from "sgcomponents"
import { WidgetDisplayType, WidgetState } from "sgwidgets"
import { getSilage } from "../lib/backendMock"

// TODO interface extending everywhere
interface MetaWidgetState extends WidgetState {
	getData: () => Promise<SilageMetaData>
}

interface SilageMetaData {
	id: number | string
	name: string
	date: string
	description: string
	customer: string
}

const MetaWidget = (silageId: string): MetaWidgetState => {
	return {
		displayType: WidgetDisplayType.CUSTOM,
		getData: async() => {
			// async fetch of silage meta data
			const r = await getSilage(silageId)
			return {
				id: r?.id,
				name: r?.name,
				date: r?.date,
				description: r?.description,
				customer: r?.customer
			} as SilageMetaData
		},
		widgetComponent: ({data}) => {
			const {id, name, date, description, customer} = data as SilageMetaData
			return (
				<div style={{width: '100%', height: '100%'}}>
					<Row align={RowAlign.LEFT} space="10%">
						<h2>{name}</h2>
					</Row>

					<Row align={RowAlign.RIGHT}>
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