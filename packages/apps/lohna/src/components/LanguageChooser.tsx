import React from "react"
import { useTranslation } from "react-i18next"
import { Button, StyleProps } from "sgcomponents"


interface LanguageChooserProps extends StyleProps {
	languages?: Array<string>
	childComponent?: (ln: string) => React.ReactNode
}

const defaultLanguages = ["de", "en"]

const LanguageChooser: React.FC<LanguageChooserProps> = ({style, className, languages=defaultLanguages, childComponent=null}) => {
	const { i18n } = useTranslation()
	const { language, changeLanguage } = i18n
	
	const next = (languages.indexOf(language) + 1) % languages.length

	return (
		<Button style={style} className={className} onClick={() => changeLanguage(languages[next])}>
			{childComponent ?
				childComponent(language)
				: language
			}
		</Button>
	)
}

export default LanguageChooser