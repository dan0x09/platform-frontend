import React from "react"
import { PageLayout } from "./Layouts"

import { Page, Row, Site } from './Page'

import "./style.css"

export const ErrorPage: React.FC = () => {
	return (
		<PageLayout>
			<Row spaceAround space="20%">
				<h1>ERROR 404</h1>
			</Row>

			<Page>
				<Site>
					<div>
						<h1>Sorry!</h1>
						<p>but this page was not found...</p>

						<h2>Here is what you can do:</h2>

						<p>{"Check, whether this is really the site you are trying to connect to: " + window.location}</p>

						<p>If this error persists, contact our support team under _</p>
					</div>
				</Site>

				<div/>
			</Page>

			<div/>
		</PageLayout>
	)
}