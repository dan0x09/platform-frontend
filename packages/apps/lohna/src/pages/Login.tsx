import React from 'react'
import { Page, Site, PageLayout, Button, Row, RowAlign } from 'sgcomponents'


import '../Style.css'

const Login: React.FC = () => {
	return (
        <PageLayout>
			<Row align={RowAlign.LEFT} spaceAround space="20%">
				<h2 className='color0'>Login Page</h2>
			</Row>

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

							<Row align={RowAlign.MID}>
								<input/>
							</Row>
						</div>

						<Button onClick={() => window.location.href = "/test"}>LOGIN</Button>

						<Button onClick={() => window.location.href = "/__--"}>ERROR</Button>
					</Row>
				</Site>
			</Page>

			<Row align={RowAlign.RIGHT} spaceAround space="20%">
				<h3 className='color0'>SILAGE CONTROL</h3>
			</Row>
		</PageLayout>
	)
}

export default Login