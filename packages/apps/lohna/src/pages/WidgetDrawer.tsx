import React, { useState } from "react"

import Drawer from "../components/Drawer"

import "../Style.css"
import { Button } from "sgcomponents"
import { WidgetStateWrapper, ShowWidgetFunction } from "sgwidgets"

import { isMobileThreshold } from "../lib/helper"
import Widgets from "./Widgets"

interface WidgetDrawerProps {
	id: string
	showData: (data: WidgetStateWrapper | null) => void
}

const WidgetDrawer: React.FC<WidgetDrawerProps> = ({id, showData}) => {
	const [collapsed, setCollapsed] = useState(false)
	const silageIds = id.split("+")
	const [silageId, setSilageId] = useState(1)

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
				{!mobile && <div key="spacer1" style={{height: "10%"}}/>}
				
				<Button key="close" onClick={() => setCollapsed(!collapsed)}>{collapsed ? "OPEN" : "CLOSE"}</Button>

				{!mobile && <div key="spacer2" style={{height: "10%"}}/>}

				{!collapsed && <Button key="next" onClick={() => {
					setSilageId((silageId + 1) % silageIds.length)
					showData(null)
					console.log(silageIds[silageId])
				}}>NEXT</Button>}
			</div>
			
			<Drawer collapsed={collapsed} margin={mobile ? "120px 0 0 0" : "0 100px 0 0"}>
				<Widgets id={silageIds[silageId]} showData={showDataAndCollapse} mobile={mobile} />
			</Drawer>
		</div>
	)
}

export default WidgetDrawer