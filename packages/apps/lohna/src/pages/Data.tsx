import React, { useState } from 'react'

import '../Style.css'
import NavigationDrawer from './NavigationDrawer'
import Page from '../components/Page'
import { DataState } from '../types'
import { Button, Chart, Row, RowAlign, Site, SiteAlign } from 'sgcomponents'
import { isMobileThreshold } from '../lib/helper'

const Data: React.FC = () => {

    const [dataState, setDataState] = useState(null as DataState | null)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))
	const mobile = isMobileThreshold(windowWidth)

    return (
        <div style={{paddingRight: !mobile ? '100px' : 0}}>
        {/* Space for drawer navigation */}
            
            <NavigationDrawer collapsable={!!dataState} showData={(d) => setDataState(d)}/>

            {/* Space for drawer navigation */}
            {mobile && <div style={{height: '100px'}} />}

            {dataState && <Page footer>
                <Site>
                    <h1>{dataState.title}</h1>

                    <h3>
                        {dataState.subtitle}
                    </h3>

                    <Row align={RowAlign.RIGHT} space="50px" spaceAround>
                        <Button onClick={() => alert("Alert alert!")}>Click me!</Button>
                    </Row>

                    <p>
                        {dataState.text}
                    </p>
                </Site>

                <Site align={SiteAlign.TOP}>
                    <Row>
                        <h2>{dataState.subtitle1}</h2>
                    </Row>

                    {dataState.dataSets && <Chart displayX={x=>x + "h"}
                        data={dataState.dataSets}
                    />}

                    <p>
                        {dataState.text1}
                    </p>
                </Site>
            </Page>}
        </div>
    )
}
export default Data