import React, { useState } from 'react'

import Drawer from '../components/Drawer'

import '../Style.css'
import { Button, GridLayout } from 'sgcomponents'
import { DataState, DataStateWrapper } from '../types'

import { Data1, Data2 } from '../data/TestDataStates'
import Widget from '../components/DataWidget'
import { createDataStateWrapper, isMobileThreshold } from '../lib/helper'

interface NavigationDrawerProps {
	showData: (data: DataStateWrapper | null) => void
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({showData}) => {
	const [collapsed, setCollapsed] = useState(false)

	const dataStates = {
		"test1": Data1,
		"test2": Data2
	}

	const showDataAndCollapse = async (data: DataState) => {
		showData(await createDataStateWrapper(data))
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
				{mobile && <div style={{height: '120px'}} />}

				<GridLayout style={{minHeight: '100vh'}} auto columns={widgetsColumns}>
					<Widget show={showDataAndCollapse} dataState={dataStates["test1"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test2"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test1"]} />

					<Widget big={widgetsColumns > 2} show={showDataAndCollapse} dataState={dataStates["test1"]} />

					<Widget show={showDataAndCollapse} dataState={dataStates["test1"]} />
				</GridLayout>
			</Drawer>
		</>
	)
}

export default NavigationDrawer