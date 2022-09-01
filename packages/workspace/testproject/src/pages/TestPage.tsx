import React from "react"
import { Page, Site } from "sgcomponents"

import TestComponent from '../components/TestComponent'

import "../Style.css"


const TestPage: React.FC = () => {
	return (
		<Page>
			<Site>
				<TestComponent />
			</Site>
		</Page>
	)
}

export default TestPage