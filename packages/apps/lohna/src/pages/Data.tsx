import React, { useState } from "react"

import "../Style.css"
import WidgetDrawer from "./WidgetDrawer"
import { WidgetDisplay, WidgetStateWrapper } from "sgwidgets"
import { isMobileThreshold } from "../lib/helper"

const Data: React.FC = () => {
	const [widgetStateWrapper, setWidgetStateWrapper] = useState(null as WidgetStateWrapper | null)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))
	const mobile = isMobileThreshold(windowWidth)

	return (
		<div style={{paddingRight: !mobile ? "100px" : 0}} className="DataPageWrapper">
			{/* Space for drawer navigation */}
            
			<WidgetDrawer showData={(d) => setWidgetStateWrapper(d)}/>

			{/* Space for drawer navigation */}
			{mobile && <div style={{height: "100px"}} />}

			{widgetStateWrapper && 
                <WidgetDisplay 
                	widgetStateWrapper={widgetStateWrapper} 
                	setWidgetStateWrapper={(d) => setWidgetStateWrapper(d)}
                	mobile={mobile}
                />
			}
		</div>
	)
}
export default Data