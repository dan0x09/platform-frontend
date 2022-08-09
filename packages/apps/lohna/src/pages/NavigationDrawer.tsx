import React, { useState } from 'react'

import Drawer from '../components/Drawer'

import '../Style.css'
import { Button } from 'sgcomponents'
import { DataStateWrapper } from '../types'

import { isMobileThreshold } from '../lib/helper'
import Widgets from './Widgets'

interface NavigationDrawerProps {
	showData: (data: DataStateWrapper | null) => void
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({showData}) => {
	const [collapsed, setCollapsed] = useState(false)

	const showDataAndCollapse = (data: DataStateWrapper) => {
		showData(data)
		setCollapsed(true)
	}

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))
	
	// decides which columns count is used per window width
	const widgetsColumns = windowWidth > 1900 ? 3 : windowWidth > 1200 ? 2 : 1
	// decides whether the screen will be treated as mobile
	const mobile = isMobileThreshold(windowWidth)

	return (
		<>
			<div className={mobile ? 'DrawerNavigationTop' : 'DrawerNavigation'}>
				<Button key="close" onClick={() => setCollapsed(!collapsed)}>{collapsed ? "OPEN" : "CLOSE"}</Button>

				{!mobile && <div key="spacer" style={{height: '10%'}}/>}
			</div>
			
			<Drawer collapsed={collapsed}>
				{/* Space for drawer navigation */}
				<Widgets columns={widgetsColumns} showData={showDataAndCollapse} />
			</Drawer>
		</>
	)
}

export default NavigationDrawer