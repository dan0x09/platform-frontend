import React from 'react'
import CSS from 'csstype'
import { Button, Chart, Page, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'

import '../Style.css'
import { RefreshWidgetFunction, WidgetDisplayProps, WidgetDisplayType, WidgetStateWrapper } from '../types'
import { createWidgetStateWrapper, hydrateWidgetStateWrapper } from '../lib/helper'

interface DisplayComponentProps {
    widgetStateWrapper: WidgetStateWrapper
    refresh: RefreshWidgetFunction
}

const DataTypeSimpleComponent: React.FC<DisplayComponentProps> = ({widgetStateWrapper, refresh}) => {
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

interface DataDisplayComponentProps {
    widgetStateWrapper: WidgetStateWrapper
    setWidgetStateWrapper: (dataStateWrapper: WidgetStateWrapper) => void
}

const DataTypeRightComponent: React.FC<DataDisplayComponentProps> = ({widgetStateWrapper, setWidgetStateWrapper}) => {
    const hasData = !!(widgetStateWrapper.dataSets.length)
    const refreshDataSets = async() => setWidgetStateWrapper(await createWidgetStateWrapper(widgetStateWrapper.widgetState))

    return (
        <Site align={SiteAlign.TOP}>
            <Row align={RowAlign.RIGHT}>
                <h2>{widgetStateWrapper.widgetState.subtitle1}</h2>
            </Row>

            {hasData && <Chart displayX={widgetStateWrapper.widgetState?.displayX}
                data={widgetStateWrapper.dataSets}
            />}

            {hasData && <Row align={RowAlign.RIGHT} space="50px" spaceAround>
                <Button onClick={refreshDataSets}>{widgetStateWrapper.widgetState.refreshText}</Button>
            </Row>}

            <p>
                {widgetStateWrapper.widgetState.text1}
            </p>
        </Site>
    )
}

// shows widget data
const WidgetDisplay: React.FC<WidgetDisplayProps> = ({style={} as CSS.Properties, className="", widgetStateWrapper, setWidgetStateWrapper, mobile=false}) => {
    const widgetType = widgetStateWrapper.widgetState.displayType

	const refreshDataSets = async() => setWidgetStateWrapper((await hydrateWidgetStateWrapper(widgetStateWrapper)))

    if(widgetType === WidgetDisplayType.DATA || widgetType === WidgetDisplayType.SIMPLE) return (
        <Page style={style} className={className} mobile={mobile}>
            {/* DataDisplayType SIMPLE + DATA */}
            <DataTypeSimpleComponent widgetStateWrapper={widgetStateWrapper} refresh={refreshDataSets} />
            {/* DataDisplayType DATA */}
            {widgetType === WidgetDisplayType.DATA &&
                <DataTypeRightComponent widgetStateWrapper={widgetStateWrapper} setWidgetStateWrapper={setWidgetStateWrapper} />
            }
        </Page>
    )
    else if(widgetType === WidgetDisplayType.CUSTOM) {
        return (
            <Page style={style} className={className} mobile={mobile}>
                {widgetStateWrapper.widgetState.displayComponent &&
                    widgetStateWrapper.widgetState.displayComponent(widgetStateWrapper, refreshDataSets)}
                {widgetStateWrapper.widgetState.displayComponentRight &&
                    widgetStateWrapper.widgetState.displayComponentRight(widgetStateWrapper, refreshDataSets)}
            </Page>
    )} else return null
}
export default WidgetDisplay