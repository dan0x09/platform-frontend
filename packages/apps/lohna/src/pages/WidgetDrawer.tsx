import React, { useState } from "react"

import Drawer from "../components/Drawer"

import "../Style.css"
import { Button } from "sgcomponents"
import { WidgetStateWrapper, ShowWidgetFunction } from "sgwidgets"

import { isMobileThreshold } from "../lib/helper"
import Widgets from "./Widgets"

interface WidgetDrawerProps {
	showData: (data: WidgetStateWrapper | null) => void
}

const WidgetDrawer: React.FC<WidgetDrawerProps> = ({showData}) => {
	const [collapsed, setCollapsed] = useState(false)

	const showDataAndCollapse = ((data) => {
		showData(data)
		setCollapsed(true)
	}) as ShowWidgetFunction

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))
	
	// decides whether the screen will be treated as mobile
	const mobile = isMobileThreshold(windowWidth)

	return (
		<div>
			<div className={mobile ? "DrawerNavigationTop" : "DrawerNavigation"}>
				<Button key="close" onClick={() => setCollapsed(!collapsed)}>{collapsed ? "OPEN" : "CLOSE"}</Button>

				{!mobile && <div key="spacer" style={{height: "10%"}}/>}
			</div>
			
			<Drawer collapsed={collapsed}>
				{ // Mobile spacer for navigation bar
					mobile && <div className='DrawerNavigationTopSpacer' />
				}

				<Widgets showData={showDataAndCollapse} mobile={mobile} />
			</Drawer>
		</div>
	)
}

export default WidgetDrawer