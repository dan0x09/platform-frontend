import React, { useEffect, useState } from "react"

import Drawer from "../components/Drawer"

import "../Style.css"
import { Button, Row } from "sgcomponents"
import { WidgetStateWrapper, ShowWidgetFunction } from "sgwidgets"

import { isMobileThreshold } from "../lib/helper"
import Widgets from "./Widgets"
import { Translation } from "react-i18next"

interface WidgetDrawerProps {
	id: string
	showData: (data: WidgetStateWrapper | null) => void
}

const WidgetDrawer: React.FC<WidgetDrawerProps> = ({id, showData}) => {
	const [collapsed, setCollapsed] = useState(false)
	const silageIds = id.split("+")
	const [silageId, setSilageId] = useState(0)

	const showDataAndCollapse = ((data) => {
		showData(data)
		setCollapsed(true)
	}) as ShowWidgetFunction

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
	}, [])
	
	// decides whether the screen will be treated as mobile
	const mobile = isMobileThreshold(windowWidth)

	return (
		<div>
			<div className={mobile ? "DrawerNavigationTop" : "DrawerNavigation"}>
				<Button key="close" onClick={() => setCollapsed(!collapsed)}><Translation>{(t) => t(collapsed ? "drawer.open" : "drawer.close")}</Translation></Button>
			</div>
			
			<Drawer collapsed={collapsed} margin={mobile ? "100px 0 0 0" : "0 100px 0 0"}>
				<Row spaceAround space="30px" style={{marginTop: "20px", marginBottom: "20px"}}>
					{silageIds.map((id, i) => <Button style={{width: '100%', minWidth: '0px', backgroundColor: i === silageId ? "tomato" : "#DFDFE1"}} key={id} onClick={() => {
						setSilageId(i)
						showData(null)
					}}>{id}</Button>)}
				</Row>

				<Widgets id={silageIds[silageId]} showData={showDataAndCollapse} mobile={mobile} />
			</Drawer>
		</div>
	)
}

export default WidgetDrawer