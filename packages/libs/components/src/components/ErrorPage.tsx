import React from "react"

import { Page, Site } from './Page'

import "./style.css"

export const ErrorPage: React.FC = () => {
	return (
		<Page>
			<Site>
				<h1>404</h1>

				<h2>Sorry!</h2>
				<p>but this page was not found</p>
			</Site>

			<Site>
				<h2>Here is what you can do:</h2>

				<p>{"Check, whether this is really the site you are trying to connect to: " + window.location}</p>
			</Site>
		</Page>
	)
}