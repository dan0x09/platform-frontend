import React, { useState } from 'react'

import Drawer from '../components/Drawer'

import '../Style.css'
import { Button, GridLayout } from 'sgcomponents'
import { DataState } from '../types'

import TestDataState from '../data/TestDataState'
import Widget from '../components/DataWidget'
import { isMobileThreshold } from '../lib/helper'

interface NavigationDrawerProps {
	collapsable?: boolean
	showData: (data: DataState | null) => void
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({collapsable=true, showData}) => {
	const [collapsed, setCollapsed] = useState(false)

	const safeSetCollapsed = (c: boolean) => {
		if(collapsable) setCollapsed(c)
	}

	const dataStates = {
		"test": TestDataState
	}

	const showDataAndCollapse = (data: DataState | null) => {
		showData(data)
		setCollapsed(true) // TODO ignoring collapsable, bc of rerender for prop is later then this..
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
				{collapsable && <Button key="close" onClick={() => safeSetCollapsed(!collapsed)}>{collapsed ? "OPEN" : "CLOSE"}</Button>}

				{!mobile && <div key="spacer" style={{height: '10%'}}/>}
			</div>

			<Drawer collapsed={collapsable && collapsed}>
				{/* Space for drawer navigation */}
				{mobile && <div style={{height: '100px'}} />}

				<GridLayout style={{minHeight: '850px'}} auto columns={widgetsColumns}>
					<Widget show={showDataAndCollapse} dataState={dataStates["test"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test"]} />

					<Widget big={widgetsColumns > 2} show={showDataAndCollapse} dataState={dataStates["test"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test"]} />
				</GridLayout>
			</Drawer>
		</>
	)
}

export default NavigationDrawer