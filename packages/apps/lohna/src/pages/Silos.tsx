import React from 'react'
import {Site, Button, Row, RowAlign, } from 'sgcomponents'

import '../Style.css'
import Page from '../components/Page'


const Login: React.FC = () => {
	return (
		<Page header footer>
			<Site>
				<Button className='SiloChooserButton' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>
			</Site>

			<Site>
				<h2>Silo X</h2>
				<p>Some information about Silo X</p>

				<Row align={RowAlign.RIGHT}>
					<Button onClick={() => window.location.href = "/silo"}>OPEN</Button>
				</Row>
			</Site>
		</Page>
	)
}

export default Login