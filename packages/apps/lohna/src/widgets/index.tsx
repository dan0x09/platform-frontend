import React from "react"
import { WidgetGrid, ShowWidgetFunction } from "sgwidgets"


import { Data2, Data4 } from "./TestDataStates"
import SilageMetaWidget from "./SilageMetaWidget"
import WeatherWidget from "./WeatherWidget"
import Silage3DModelWidget from "./Silage3DModelWidget"

interface WidgetsPageProps {
	id: string
	showData: ShowWidgetFunction
	mobile: boolean
}

const Widgets: React.FC<WidgetsPageProps> = ({id, showData, mobile}) => {
	const widgets = [
		SilageMetaWidget(id), WeatherWidget(id), Silage3DModelWidget(id), Data2, Data4
	]

	return (
		<WidgetGrid key={""+ id} widgets={widgets} show={showData} mobile={mobile} />
	)
}

export default Widgets