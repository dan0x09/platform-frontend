import React from "react"
import { WidgetDisplayType, WidgetProps } from "../types"
import CustomWidget from "./widgets/CustomWidget"
import DataWidget from "./widgets/DataWidget"
import SimpleWidget from "./widgets/SimpleWidget"

// decides which widget to use based on displayType
const Widget: React.FC<WidgetProps> = (props) => {
	const { widgetStateWrapper } = props,
		widgetType = widgetStateWrapper.widgetState.displayType
	const WhichWidget = 
		widgetType === WidgetDisplayType.CUSTOM ? CustomWidget
		: widgetType === WidgetDisplayType.SIMPLE ? SimpleWidget
		: widgetType === WidgetDisplayType.DATA ? DataWidget
		: null

	return (
		WhichWidget && <WhichWidget {...props} />
	)
}

export default Widget