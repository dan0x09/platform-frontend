import React, { useState } from 'react'
import { Button, Chart, Row, RowAlign } from 'sgcomponents'
import { createDataStateWrapper } from '../lib/helper'


import '../Style.css'
import { DataState, DataStateWrapper } from '../types'

interface WidgetProps {
	show: (dataState: DataState) => void
	dataState: DataState
	big?: boolean
}

const Widget: React.FC<WidgetProps> = ({show, dataState, big=false}) => {
	const [dataStateWrapper, setDataStateWrapper] = useState(null as DataStateWrapper | null)
	const [dataFetched, setDataFetched] = useState(false)
	if(!dataFetched) {
		setDataFetched(true)
		createDataStateWrapper(dataState).then(r => setDataStateWrapper(r))
	}

	return (
		<div className={'Widget' + (big ? ' WidgetDouble' : '')}>
			<div style={{width: '20px'}} />

			<div className={'WidgetContent'}>
				<Row>
					<h2>{dataState.title}</h2>
				</Row>

				<Row align={RowAlign.RIGHT}>
					<p>{dataState.subtitle1}</p>
				</Row>

				<Row align={RowAlign.MID} space='1px' spaceAround>
					<div>
						<Button onClick={() => setDataFetched(false)}>REFRESH</Button>

						<div style={{height: '20px'}}></div>

						<Button onClick={() => show(dataState)}>SHOW</Button>
					</div>

					{dataStateWrapper?.dataSets.length && <div style={{flex: 1, width: 0}}><Chart displayX={x=>x + "h"}
							aspect={undefined}
							maxHeight={250}
							data={dataStateWrapper.dataSets}
						/></div>}
				</Row>
			</div>

			<div style={{width: big ? '15px' : '20px'}} />
		</div>
	)
}

export default Widget