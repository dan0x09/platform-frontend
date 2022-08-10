import React, { useState } from "react"
import CSS from 'csstype'
import { GridLayout, StyleProps } from "sgcomponents"
import Widget from "./Widget"
import { ShowWidgetFunction, WidgetState, WidgetStateWrapper } from "../types"
import { createWidgetStateWrapper } from "../lib/helper"

interface WidgetGridProps extends StyleProps {
	widgets: Array<WidgetState>
	mobile?: boolean
	show: ShowWidgetFunction
}

async function createStateWrappers(states: Array<WidgetState>, setStateWrappers: (wrapper: Array<WidgetStateWrapper>) => void) {
	const wrappers = []
	for(let i = 0; i < states.length; i++) {
		const wrapper = await createWidgetStateWrapper(states[i])
		wrappers.push(wrapper)
	}
	setStateWrappers(wrappers)
}

const WidgetGrid: React.FC<WidgetGridProps> = ({style={} as CSS.Properties, className="", widgets, show, mobile=false}) => {
	const [widgetStateWrappers, setWidgetStateWrappers] = useState([] as Array<WidgetStateWrapper>)
	if(widgetStateWrappers.length === 0)
		createStateWrappers(widgets, (wrappers) => setWidgetStateWrappers(wrappers))

	return (
		<GridLayout style={style} className={className}>
			{
				widgetStateWrappers.map((stateWrapper, index) => 
					<Widget key={"" + index} widgetStateWrapper={stateWrapper} show={show} big={stateWrapper.widgetState.big} mobile={mobile} />
				)
			}
		</GridLayout>
	)
}

export default WidgetGrid