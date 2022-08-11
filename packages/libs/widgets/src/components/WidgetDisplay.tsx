import React from 'react'

import '../style.css'
import { Button, Chart, Page, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'
import { WidgetDisplayType, WidgetStateWrapper } from '../types'
import { createWidgetStateWrapper } from '../lib/helper'

interface DataDisplayComponentProps {
    widgetStateWrapper: WidgetStateWrapper
}

const DataTypeLeftComponent: React.FC<DataDisplayComponentProps> = ({widgetStateWrapper}) => {
    // TODO ADD SIMPLE WIDGET
    return (
        <Site>
            <h1>{widgetStateWrapper.widgetState.title}</h1>

            <h3>
                {widgetStateWrapper.widgetState.subtitle}
            </h3>

            <p>
                {widgetStateWrapper.widgetState.text}
            </p>

            {widgetStateWrapper.widgetState.informationComponent &&
                widgetStateWrapper.widgetState.informationComponent(widgetStateWrapper)
            }
        </Site>
    )
}

interface DataDisplayComponentDataSetProps {
    widgetStateWrapper: WidgetStateWrapper
    setWidgetStateWrapper: (dataStateWrapper: WidgetStateWrapper) => void
}

const DataTypeRightComponent: React.FC<DataDisplayComponentDataSetProps> = ({widgetStateWrapper, setWidgetStateWrapper}) => {
    const hasData = !!(widgetStateWrapper.dataSets.length)
    const refreshDataSets = async() => setWidgetStateWrapper(await createWidgetStateWrapper(widgetStateWrapper.widgetState))

    return (
        <Site align={SiteAlign.TOP}>
            <Row align={RowAlign.RIGHT}>
                <h2>{widgetStateWrapper.widgetState.subtitle1}</h2>
            </Row>

            {hasData && <Chart displayX={x=>x + "h"}
                data={widgetStateWrapper.dataSets}
            />}

            {hasData && <Row align={RowAlign.RIGHT} space="50px" spaceAround>
                <Button onClick={refreshDataSets}>REFRESH</Button>
            </Row>}

            <p>
                {widgetStateWrapper.widgetState.text1}
            </p>
        </Site>
    )
}

interface WidgetDisplayProps {
    widgetStateWrapper: WidgetStateWrapper
    setWidgetStateWrapper: (widgetStateWrapper: WidgetStateWrapper) => void
    mobile?: boolean
}

const WidgetDisplay: React.FC<WidgetDisplayProps> = ({widgetStateWrapper, setWidgetStateWrapper, mobile=false}) => {
    return (
        <Page mobile={mobile}>
            {/* DataDisplayType DATA */}
            {widgetStateWrapper.widgetState.displayType === WidgetDisplayType.DATA &&
                <DataTypeLeftComponent widgetStateWrapper={widgetStateWrapper} />
            }
            {widgetStateWrapper.widgetState.displayType === WidgetDisplayType.DATA &&
                <DataTypeRightComponent widgetStateWrapper={widgetStateWrapper} setWidgetStateWrapper={setWidgetStateWrapper} />
            }
            {/* DataDisplayType CUSTOM */}
            {widgetStateWrapper.widgetState.displayType === WidgetDisplayType.CUSTOM && widgetStateWrapper.widgetState.displayComponent && 
                widgetStateWrapper.widgetState.displayComponent(widgetStateWrapper)
            }
        </Page>
    )
}
export default WidgetDisplay