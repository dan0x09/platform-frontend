import React from 'react'

import '../style.css'
import { Button, Chart, Page, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'
import { RefreshWidgetFunction, WidgetDisplayType, WidgetStateWrapper } from '../types'
import { createWidgetStateWrapper, hydrateWidgetStateWrapper } from '../lib/helper'

interface DataDisplayComponentProps {
    widgetStateWrapper: WidgetStateWrapper
    refresh: RefreshWidgetFunction
}

const DataTypeSimpleComponent: React.FC<DataDisplayComponentProps> = ({widgetStateWrapper, refresh}) => {
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
                widgetStateWrapper.widgetState.informationComponent(widgetStateWrapper, refresh)
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
    const widgetType = widgetStateWrapper.widgetState.displayType

	const refreshDataSets = async() => setWidgetStateWrapper((await hydrateWidgetStateWrapper(widgetStateWrapper)))

    return (
        <Page mobile={mobile}>
            {/* DataDisplayType SIMPLE + DATA */}
            {(widgetType === WidgetDisplayType.DATA || widgetType === WidgetDisplayType.SIMPLE) &&
                <DataTypeSimpleComponent widgetStateWrapper={widgetStateWrapper} refresh={refreshDataSets} />
            }
            {widgetType === WidgetDisplayType.DATA &&
                <DataTypeRightComponent widgetStateWrapper={widgetStateWrapper} setWidgetStateWrapper={setWidgetStateWrapper} />
            }
            {/* DataDisplayType CUSTOM */}
            {widgetType === WidgetDisplayType.CUSTOM && widgetStateWrapper.widgetState.displayComponent && 
                widgetStateWrapper.widgetState.displayComponent(widgetStateWrapper, refreshDataSets)
            }
        </Page>
    )
}
export default WidgetDisplay