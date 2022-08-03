import React from 'react'
import { Row, RowAlign } from 'sgcomponents'


import '../Style.css'

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
	return (
        <>
			<Row align={RowAlign.RIGHT} spaceAround space="20%">
				<h3 className='color0'>SILAGE CONTROL</h3>
			</Row>
		</>
	)
}

export default Footer