import React from 'react'


import '../Style.css'

interface DrawerProps {
	children: React.ReactNode	 // Content
	collapsed: boolean			 // Whether to show content
}

const Drawer: React.FC<DrawerProps> = ({children, collapsed}) => {
	return (
		<div className={collapsed ? 'Drawer DrawerCollapsed' : 'Drawer'}>
			<div className='DrawerContent'>
				{children}
			</div>
		</div>
	)
}

export default Drawer