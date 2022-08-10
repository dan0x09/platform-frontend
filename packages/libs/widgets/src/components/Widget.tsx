import React from "react"
import CustomWidget from "./widgets/CustomWidget"
import DataWidget from "./widgets/DataWidget"
import { WidgetDisplayType, WidgetProps } from "../types"

const Widget: React.FC<WidgetProps> = (props) => {
	const { widgetStateWrapper } = props,
		widgetType = widgetStateWrapper.widgetState.displayType
	const WhichWidget = 
		widgetType === WidgetDisplayType.CUSTOM ? CustomWidget
		: widgetType === WidgetDisplayType.DATA ? DataWidget
		: null

	return (
		WhichWidget && <WhichWidget {...props} />
	)
}

export default Widget