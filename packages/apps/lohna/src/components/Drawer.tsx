import React from 'react'


import '../Style.css'

interface DrawerProps {
	children: React.ReactNode	 // Content
	collapsed: boolean			 // Whether to show content
	margin?: string			 // Optional padding for drawers etc.
}

const Drawer: React.FC<DrawerProps> = ({children, collapsed, margin=""}) => {
	return (
		<div className={collapsed ? 'Drawer DrawerCollapsed' : 'Drawer'}>
			<div className='DrawerContentWindow'>
				<div className='DrawerContent' style={margin !== "" ? {margin: margin} : {}}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Drawer