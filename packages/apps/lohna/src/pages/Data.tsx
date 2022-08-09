import React, { useState } from 'react'

import '../Style.css'
import NavigationDrawer from './NavigationDrawer'
import Page from '../components/Page'
import { DataDisplayType, DataStateWrapper } from '../types'
import { Button, Chart, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'
import { createDataStateWrapper, isMobileThreshold } from '../lib/helper'

interface DataDisplayComponentProps {
    dataStateWrapper: DataStateWrapper
}

const DataTypeLeftComponent: React.FC<DataDisplayComponentProps> = ({dataStateWrapper}) => {

    return (
        <Site>
            <h1>{dataStateWrapper.dataState.title}</h1>

            <h3>
                {dataStateWrapper.dataState.subtitle}
            </h3>

            <p>
                {dataStateWrapper.dataState.text}
            </p>

            {dataStateWrapper.dataState.informationComponent &&
                dataStateWrapper.dataState.informationComponent(dataStateWrapper)
            }
        </Site>
    )
}

interface DataDisplayComponentDataSetProps {
    dataStateWrapper: DataStateWrapper
    setDataStateWrapper: (dataStateWrapper: DataStateWrapper) => void
}

const DataTypeRightComponent: React.FC<DataDisplayComponentDataSetProps> = ({dataStateWrapper, setDataStateWrapper}) => {
    const hasData = !!(dataStateWrapper.dataSets.length)
    const refreshDataSets = async() => setDataStateWrapper(await createDataStateWrapper(dataStateWrapper.dataState))

    return (
        <Site align={SiteAlign.TOP}>
            <Row align={RowAlign.RIGHT}>
                <h2>{dataStateWrapper.dataState.subtitle1}</h2>
            </Row>

            {hasData && <Chart displayX={x=>x + "h"}
                data={dataStateWrapper.dataSets}
            />}

            {hasData && <Row align={RowAlign.RIGHT} space="50px" spaceAround>
                <Button onClick={refreshDataSets}>REFRESH</Button>
            </Row>}

            <p>
                {dataStateWrapper.dataState.text1}
            </p>
        </Site>
    )
}

const Data: React.FC = () => {
    const [dataStateWrapper, setDataStateWrapper] = useState(null as DataStateWrapper | null)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))
	const mobile = isMobileThreshold(windowWidth)

    return (
        <div style={{paddingRight: !mobile ? '100px' : 0}}>
        {/* Space for drawer navigation */}
            
            <NavigationDrawer showData={setDataStateWrapper}/>

            {/* Space for drawer navigation */}
            {mobile && <div style={{height: '100px'}} />}

            {dataStateWrapper && <Page footer>
                {/* DataDisplayType DATA */}
                {dataStateWrapper.dataState.displayType === DataDisplayType.DATA &&
                    <DataTypeLeftComponent dataStateWrapper={dataStateWrapper} />
                }
                {dataStateWrapper.dataState.displayType === DataDisplayType.DATA &&
                    <DataTypeRightComponent dataStateWrapper={dataStateWrapper} setDataStateWrapper={(d) => setDataStateWrapper(d)} />
                }
                {/* DataDisplayType CUSTOM */}
                {dataStateWrapper.dataState.displayType === DataDisplayType.CUSTOM && dataStateWrapper.dataState.displayComponent && 
                    dataStateWrapper.dataState.displayComponent(dataStateWrapper)
                }
            </Page>}
        </div>
    )
}
export default Data