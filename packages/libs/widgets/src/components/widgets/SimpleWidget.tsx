import React from 'react'
import { Button, Row, RowAlign } from 'sgcomponents'


import '../../style.css'
import { WidgetProps } from '../../types'

const SimpleWidget: React.FC<WidgetProps> = ({show, widgetStateWrapper, big=false, mobile=false}) => {
	return (
		<div className={(mobile ? 'WidgetMobile' : 'Widget') + (big ? ' WidgetDouble' : '')}>
			<div className={'WidgetContent'}>
				<Row>
					<h2>{widgetStateWrapper.widgetState.title}</h2>
				</Row>

				<Row align={RowAlign.RIGHT}>
					<p>{widgetStateWrapper.widgetState.subtitle}</p>
				</Row>

				<div className='WidgetContentSpacer' />

                <p style={{maxHeight: '200px', overflow: 'hidden scroll', backgroundColor: 'white', padding: '2px'}}>
                    {widgetStateWrapper.widgetState.text}	
                </p>
				
                <Row align={RowAlign.RIGHT}>
                    <Button onClick={() => show(widgetStateWrapper)}>SHOW</Button>
                </Row>

				<div className='WidgetContentSpacer' />
			</div>
		</div>
	)
}

export default SimpleWidget