import React from "react"
import CSS from 'csstype'
import { GridLayout, StyleProps } from "sgcomponents"

interface WidgetGridProps extends StyleProps {
	widgets: Array<JSX.Element | boolean>
	columns: number
}

const WidgetGrid: React.FC<WidgetGridProps> = ({style={} as CSS.Properties, className="", widgets, columns}) => {

	return (
		<GridLayout style={style} className={className} auto columns={columns}>
			{widgets}
		</GridLayout>
	)
}

export default WidgetGrid