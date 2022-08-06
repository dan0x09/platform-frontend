import React, { useState } from 'react'

import '../Style.css'
import NavigationDrawer from './NavigationDrawer'
import Page from '../components/Page'
import { DataStateWrapper } from '../types'
import { Button, Chart, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'
import { isMobileThreshold } from '../lib/helper'

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
                <Site>
                    <h1>{dataStateWrapper.dataState.title}</h1>

                    <h3>
                        {dataStateWrapper.dataState.subtitle}
                    </h3>

                    <Row align={RowAlign.RIGHT} space="50px" spaceAround>
                        <Button onClick={() => alert("Alert alert!")}>Click me!</Button>
                    </Row>

                    <p>
                        {dataStateWrapper.dataState.text}
                    </p>
                </Site>

                <Site align={SiteAlign.TOP}>
                    <Row align={RowAlign.RIGHT}>
                        <h2>{dataStateWrapper.dataState.subtitle1}</h2>
                    </Row>

                    {dataStateWrapper.dataSets && <Chart displayX={x=>x + "h"}
                        data={dataStateWrapper.dataSets}
                    />}

                    <p>
                        {dataStateWrapper.dataState.text1}
                    </p>
                </Site>
            </Page>}
        </div>
    )
}
export default Data