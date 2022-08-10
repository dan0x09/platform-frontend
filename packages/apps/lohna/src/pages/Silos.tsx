import React from "react"
import { Page, Site, Button, Row, RowAlign, } from "sgcomponents"

import "../Style.css"


const Login: React.FC = () => {
	return (
		<Page>
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