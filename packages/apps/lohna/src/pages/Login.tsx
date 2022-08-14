import React from "react"
import { Page, Site, Button, Row, RowAlign } from "sgcomponents"

import "../Style.css"


const Login: React.FC = () => {
	return (
		<Page>
			<Site>
				<Row align={RowAlign.MID}>
					<div>
						<Row align={RowAlign.MID}>
							<h3>Please login here</h3>
						</Row>

						<Row align={RowAlign.MID}>
							<input/>
						</Row>

						<div style={{height: "20px"}} />

						<Row align={RowAlign.MID}>
							<input/>
						</Row>
					</div>

					<Button onClick={() => window.location.href = "/silos"}>LOGIN</Button>

					<Button onClick={() => window.location.href = "/__--"}>ERROR</Button>
				</Row>
			</Site>
		</Page>
	)
}

export default Login