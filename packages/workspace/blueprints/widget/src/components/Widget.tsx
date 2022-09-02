import React from "react"

import { WidgetDisplayType, WidgetState } from "sgwidgets"
import "../Style.css"


const Widget = (): WidgetState => {

	return {
		displayType: WidgetDisplayType.CUSTOM
	}
}

export default Widget