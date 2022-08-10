import React from "react"
import { WidgetGrid, ShowWidgetFunction } from "sgwidgets"


import { Data1, Data2, Data3, Data4 } from "../data/TestDataStates"

interface WidgetsPageProps {
	showData: ShowWidgetFunction
	mobile: boolean
}

const widgets = [
	Data1, Data2, Data3, Data4, Data4
]

const Widgets: React.FC<WidgetsPageProps> = ({showData, mobile}) => {
	const style = !mobile ? {minHeight: "800px", minWidth: "85%", maxWidth: "85vw"} : {minHeight: "0px"}

	return (
		<WidgetGrid style={style} widgets={widgets} show={showData} mobile={mobile} />
	)
}

export default Widgets