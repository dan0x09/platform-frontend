import React, { useState } from 'react'
import { Button, Chart, Row, RowAlign } from 'sgcomponents'
import { hydrateWidgetStateWrapper } from '../../lib/helper'


import '../../Style.css'
import { WidgetProps } from '../../types'

const DataWidget: React.FC<WidgetProps> = ({show, widgetStateWrapper, big=false, mobile=false}) => {
	const [dataSets, setDataSets] = useState(widgetStateWrapper.dataSets)

	const refreshDataSets = async() => setDataSets((await hydrateWidgetStateWrapper(widgetStateWrapper)).dataSets)

	return (
		<div className={(mobile ? 'WidgetMobile' : 'Widget') + (big && !mobile ? ' WidgetDouble' : '')}>
			<div className={'WidgetContent'}>
				<Row>
					<div>
						<h2>{widgetStateWrapper.widgetState.title}</h2>

						<p>{widgetStateWrapper.widgetState.subtitle}</p>
					</div>
				</Row>

				<Row align={RowAlign.RIGHT}>
					<p>{widgetStateWrapper.widgetState.subtitle1}</p>
				</Row>

				<div className='WidgetContentSpacer' />

				{!!(dataSets.length) ? <Row align={RowAlign.MID} space='1px' spaceAround>
					<div>
						<Button onClick={refreshDataSets}>{widgetStateWrapper.widgetState.refreshText}</Button>

						<div style={{height: '20px'}}></div>

						<Button onClick={() => show(widgetStateWrapper)}>{widgetStateWrapper.widgetState.showText}</Button>
					</div>

					<div style={{flex: 1, width: 0}}> <Chart displayX={widgetStateWrapper.widgetState?.displayX}
							aspect={undefined}
							maxHeight={200}
							data={dataSets}
						/></div>
				</Row>
				:
				widgetStateWrapper.widgetState.text && <div>
					<p className='WidgetContentText'>
						{widgetStateWrapper.widgetState.text}	
					</p>

					<Row align={RowAlign.RIGHT}>
						<Button onClick={() => show(widgetStateWrapper)}>{widgetStateWrapper.widgetState.showText}</Button>
					</Row>
				</div>}

				<div className='WidgetContentSpacer' />
			</div>
		</div>
	)
}

export default DataWidget