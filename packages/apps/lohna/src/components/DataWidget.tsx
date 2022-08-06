import React from 'react'
import { Button, Chart, Row, RowAlign } from 'sgcomponents'


import '../Style.css'
import { DataState } from '../types'

interface WidgetProps {
	show: (dataState: DataState) => void
	dataState: DataState
	big?: boolean
}

const Widget: React.FC<WidgetProps> = ({show, dataState, big=false}) => {
	return (
		<div className={'Widget' + (big ? ' WidgetDouble' : '')}>
			<div style={{width: '20px'}} />

			<div className={'WidgetContent'} onClick={() => show(dataState)}>
				<Row>
					<h2>{dataState.title}</h2>
				</Row>

				<Row align={RowAlign.MID} space='1px' spaceAround>
					<Button onClick={alert}>jo</Button>

					{dataState.dataSets && <div style={{flex: 1, width: 0}}><Chart displayX={x=>x + "h"}
							aspect={undefined}
							maxHeight={250}
							data={dataState.dataSets}
						/></div>}
				</Row>
			</div>

			<div style={{width: big ? '15px' : '20px'}} />
		</div>
	)
}

export default Widget