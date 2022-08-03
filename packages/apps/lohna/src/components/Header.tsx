import React from 'react'
import { Row, RowAlign } from 'sgcomponents'


import '../Style.css'


interface HeaderProps {
	children: string
}

const Login: React.FC<HeaderProps> = ({children}) => {
	return (
		<>
			<Row align={RowAlign.LEFT} spaceAround space="20%">
				<h2 className='color0'>{children}</h2>
			</Row>
		</>
	)
}

export default Login