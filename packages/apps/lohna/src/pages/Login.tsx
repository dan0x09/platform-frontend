import React from 'react'
import { Page, Site, PageLayout, Button, Row, RowAlign } from 'sgcomponents'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../Style.css'

const Login: React.FC = () => {
	return (
        <PageLayout>
			<Header>LOGIN</Header>

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

			<Footer></Footer>
		</PageLayout>
	)
}

export default Login