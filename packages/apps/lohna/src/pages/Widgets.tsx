import React from "react"
import { WidgetGrid, ShowWidgetFunction } from "sgwidgets"


import { Data2, Data4 } from "../data/TestDataStates"
import SilageMetaWidget from "../data/SilageMetaWidget"
import WeatherWidget from "../data/WeatherWidget"
import Silage3DModelWidget from "../data/Silage3DModelWidget"

interface WidgetsPageProps {
	id: string
	showData: ShowWidgetFunction
	mobile: boolean
}

const Widgets: React.FC<WidgetsPageProps> = ({id, showData, mobile}) => {
	const style = !mobile ? {minHeight: "800px"} : {minHeight: "0px"}

	const widgets = [
		SilageMetaWidget(id), WeatherWidget(id), Silage3DModelWidget(id), Data2, Data4
	]


	return (
		<WidgetGrid key={""+ id} style={style} widgets={widgets} show={showData} mobile={mobile} />
	)
}

export default Widgets