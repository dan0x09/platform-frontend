import React, { useState } from 'react'
import { Button, Chart, Row, RowAlign } from 'sgcomponents'
import { hydrateDataStateWrapper } from '../lib/helper'


import '../Style.css'
import { DataStateWrapper } from '../types'

interface WidgetProps {
	show: (dataStateWrapper: DataStateWrapper) => void
	dataStateWrapper: DataStateWrapper
	big?: boolean
}

const Widget: React.FC<WidgetProps> = ({show, dataStateWrapper, big=false}) => {
	const [dataSets, setDataSets] = useState(dataStateWrapper.dataSets)

	const refreshDataSets = async() => setDataSets((await hydrateDataStateWrapper(dataStateWrapper)).dataSets)

	return (
		<div className={'Widget' + (big ? ' WidgetDouble' : '')}>
			<div className={'WidgetContent'}>
				<Row>
					<h2>{dataStateWrapper.dataState.title}</h2>
				</Row>

				<Row align={RowAlign.RIGHT}>
					<p>{dataStateWrapper.dataState.subtitle1}</p>
				</Row>

				<div className='WidgetContentSpacer' />

				{!!(dataSets.length) ? <Row align={RowAlign.MID} space='1px' spaceAround>
					<div>
						<Button onClick={refreshDataSets}>REFRESH</Button>

						<div style={{height: '20px'}}></div>

						<Button onClick={() => show(dataStateWrapper)}>SHOW</Button>
					</div>

					<div style={{flex: 1, width: 0}}> <Chart displayX={x=>x + "h"}
							aspect={undefined}
							upscaleLegend
							maxHeight={200}
							data={dataSets}
						/></div>
				</Row>
				:
				dataStateWrapper.dataState.text && <div>
					<p style={{maxHeight: '200px', overflow: 'hidden scroll', backgroundColor: 'white', padding: '2px'}}>
						{dataStateWrapper.dataState.text}	
					</p>

					<Row align={RowAlign.RIGHT}>
						<Button onClick={() => show(dataStateWrapper)}>SHOW</Button>
					</Row>
				</div>}

				<div className='WidgetContentSpacer' />
			</div>
		</div>
	)
}

export default Widget