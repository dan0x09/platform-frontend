import React from "react"
import { WidgetGrid, ShowWidgetFunction } from "sgwidgets"

import {Widget as EvaluationWidget} from 'sg-evaluation-widget'

//import { Data2 } from "./TestDataStates"
import SilageMetaWidget from "./SilageMetaWidget"
import SilageMetaDataWidget from "./SilageMetaDataWidget"
import WeatherWidget from "./WeatherWidget"
import Silage3DModelWidget from "./Silage3DModelWidget"


import "../Style.css"

interface WidgetsPageProps {
	id: string
	showData: ShowWidgetFunction
	mobile: boolean
}

const Widgets: React.FC<WidgetsPageProps> = ({id, showData, mobile}) => {
	const widgets = [
		SilageMetaWidget(id), WeatherWidget(id), Silage3DModelWidget(id), EvaluationWidget(), SilageMetaDataWidget(id)
	]

	return (
		<WidgetGrid key={""+ id} widgets={widgets} show={showData} mobile={mobile} />
	)
}

export default Widgets