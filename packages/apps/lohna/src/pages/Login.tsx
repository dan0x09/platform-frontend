import React from "react"
import { Page, Site, Button, Row, RowAlign } from "sgcomponents"
import LanguageChooser from "../components/LanguageChooser"

import { useTranslation } from "react-i18next"
import "../Style.css"


const Login: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Page>
			<Site>
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

				<div style={{height: 20}}/>

				<Row align={RowAlign.MID}>

					<Button style={{width: '120px'}} onClick={() => window.location.href = "/silos"}>{t("title")}</Button>

					<Button onClick={() => window.location.href = "/__--"}>ERROR</Button>
					
					<LanguageChooser
					
					/>
				</Row>
			</Site>
		</Page>
	)
}

export default Login