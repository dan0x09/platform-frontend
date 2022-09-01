import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "../Style.css"
import WidgetDrawer from "./WidgetDrawer"
import { WidgetDisplay, WidgetStateWrapper } from "sgwidgets"
import { isMobileThreshold } from "../lib/helper"

const Data: React.FC = () => {
	const [widgetStateWrapper, setWidgetStateWrapper] = useState(null as WidgetStateWrapper | null)
	const {id} = useParams()
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
	}, [])
	const mobile = isMobileThreshold(windowWidth)

	return (
		<div style={{paddingRight: !mobile ? "100px" : 0}} className="DataPageWrapper">
			{/* Space for drawer navigation */}
            
			<WidgetDrawer id={"" + id} showData={(d) => setWidgetStateWrapper(d)}/>

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