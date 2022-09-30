# WidgetState configuration
```
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
		text: t("widgets.metadata.text"),
		refreshText: t("widgets.all.refresh"),
		showText: t("widgets.all.show"),
		getData: async() => {
			// async fetch of silage meta data
			return {
				additionalSets: [{
					yName: 'test data',
					points: [[0,.1], [1,1], [2,3]],
					style: {backgroundColor: 'tomato', color: 'tomato'},
					type: ChartDataType.AREA
				},{
					yName: 'other data',
					points: [[0,.1], [1,1.5], [2,2.3]],
					style: {color: 'magenta'},
					type: ChartDataType.LINE
				},{
					yName: 'more data',
					points: [[0,1.2], [1,.2], [2,1.9]],
					style: {color: 'blue'},
					type: ChartDataType.LINE
				},{
					yName: 'a curve',
					points: [[0,1], [1,1.2], [2,3.1]],
					style: {color: '#333'},
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
		displayComponent: ({widgetState, dataSets}) => {
			return (
				<Site>
					<h1>{widgetState?.title}</h1>

					<h3>{widgetState?.subtitle}</h3>

					<Row>
						<Chart 
							maxHeight={500}
							data={dataSets}
						/>
					</Row>

					<p>{widgetState?.text}</p>
				</Site>
			)
		},
		displayComponentRight: ({widgetState, data}) => {
			return (
				<Site>
					<h2>{widgetState?.subtitle1}</h2>
					<Row>
						<Chart 
							maxHeight={500}
							data={data.additionalSets}
							displayX={(x) => x + " m"}
						/>
					</Row>
				</Site>
			)
		}
	}
}

export default MetaWidget

// call returns widgetState
MetaWidget()

```

# WidgetDisplay, WidgetGrid

```
const widgets = [MetaWidget(), ...]

const [show, setShow] = useState(false)

const [widgetStateWrapper, setWidgetStateWrapper] = useState(widgets[0])

...
	<Site> 
		<WidgetGrid widgets={widgets} show={wSW => {
			setWidgetStateWrapper(wSW)
			setShow(true)
		}} />


		{show && 
			<Button onClick={() => setShow(false)}> X </Button> &&
			<WidgetDisplay
				widgetStateWrapper={widgetStateWrapper}
				setWidgetStateWrapper={setWidgetStateWrapper}
		/>}
	</Site>
```