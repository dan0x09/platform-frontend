import React, { useState } from 'react'
import { Button, Chart, Row, RowAlign } from 'sgcomponents'
import { hydrateWidgetStateWrapper } from '../../lib/helper'


import '../../style.css'
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
						<Button onClick={refreshDataSets}>REFRESH</Button>

						<div style={{height: '20px'}}></div>

						<Button onClick={() => show(widgetStateWrapper)}>SHOW</Button>
					</div>

					<div style={{flex: 1, width: 0}}> <Chart displayX={x=>x + "h"}
							aspect={undefined}
							maxHeight={200}
							data={dataSets}
						/></div>
				</Row>
				:
				widgetStateWrapper.widgetState.text && <div>
					<p style={{maxHeight: '200px', overflow: 'hidden scroll', backgroundColor: 'white', padding: '2px'}}>
						{widgetStateWrapper.widgetState.text}	
					</p>

					<Row align={RowAlign.RIGHT}>
						<Button onClick={() => show(widgetStateWrapper)}>SHOW</Button>
					</Row>
				</div>}

				<div className='WidgetContentSpacer' />
			</div>
		</div>
	)
}

export default DataWidget