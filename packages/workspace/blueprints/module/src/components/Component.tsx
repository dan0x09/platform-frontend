import React from "react"

import { useTranslation } from "react-i18next"
import "../Style.css"


const Component: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}

export default Component