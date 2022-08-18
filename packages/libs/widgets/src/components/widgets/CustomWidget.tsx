import React, { useState } from 'react'
import { hydrateWidgetStateWrapper } from '../../lib/helper'


import '../../Style.css'
import { WidgetProps } from '../../types'

const CustomWidget: React.FC<WidgetProps> = ({show, widgetStateWrapper, big=false, mobile=false}) => {
	const [widgetStateWrapperState, setWidgetStateWrapperState] = useState(widgetStateWrapper)

	const refreshDataSets = async() => setWidgetStateWrapperState((await hydrateWidgetStateWrapper(widgetStateWrapper)))

	return (
		<div className={(mobile ? 'WidgetMobile' : 'Widget') + (big ? ' WidgetDouble' : '')}>
			<div className={'WidgetContent'}>
				{widgetStateWrapper.widgetState.widgetComponent && 
					widgetStateWrapper.widgetState.widgetComponent(widgetStateWrapperState, show, refreshDataSets)
				}
			</div>
		</div>
	)
}

export default CustomWidget