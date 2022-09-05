import React from 'react'
import { Button, Row, RowAlign } from 'sgcomponents'


import '../../Style.css'
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

                <p className='WidgetContentText'>
                    {widgetStateWrapper.widgetState.text}	
                </p>
				
                <Row align={RowAlign.RIGHT}>
                    <Button onClick={() => show(widgetStateWrapper)}>{widgetStateWrapper.widgetState.showText}</Button>
                </Row>

				<div className='WidgetContentSpacer' />
			</div>
		</div>
	)
}

export default SimpleWidget