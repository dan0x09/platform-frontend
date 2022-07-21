import React, { useState } from 'react'
import TEST2 from 'test2'
import { Page, Site, PageLayout, SiteAlign, Button, Chart, ChartDataType, ChartDataPoint } from 'sgcomponents'
import { fetchTemperatureData } from 'sgapi'


import './Style.css'

async function getTempData() {
    return await fetchTemperatureData() as ChartDataPoint[]
}

interface SomeTextProps {
    count?: number
}

const SomeText: React.FC<SomeTextProps> = ({count = 0}) => {
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium, aut nesciunt vel deleniti officiis sit quo optio ducimus ab quae odit esse atque exercitationem accusamus laborum fugit distinctio magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam eveniet perspiciatis quia, eos facilis alias, vero fuga ad, inventore aperiam libero veritatis explicabo quibusdam fugit dicta tempore! Recusandae, maiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque ducimus maxime illum vero, aliquid quae voluptate modi beatae dignissimos minus? Eaque sapiente aperiam aut quidem velit nisi hic temporibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quidem adipisci asperiores facilis quaerat qui quibusdam animi dolor, ipsum provident aperiam eligendi esse optio soluta. Excepturi mollitia tenetur quis illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex facere amet, facilis vero fugit similique dolore! Quo, dolorum. Possimus, molestias veniam? Esse, maiores minima quae corrupti nisi modi ducimus.LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque placeat sint nobis fugiat aliquam quos blanditiis, totam ducimus corrupti dolore amet commodi, iure voluptatum libero quibusdam voluptatem, eos porro ipsam."
    const t = count > 0 ? text.slice(0, count) : text
    
    return (
        <p>{t}</p>
    )
}

const App: React.FC = () => {
    const [data, setData] = useState([] as ChartDataPoint[])
    const [data2, setData2] = useState([] as ChartDataPoint[])

    return (
        <PageLayout>
            <h2 className='color0'>{TEST2}</h2>

            <Page>
                <Site>
                    <Button onClick={() => alert("Alert alert!")}>Click me!</Button>

                    <SomeText/>
                </Site>

                <Site align={SiteAlign.TOP}>
                    <h2>Data of silage</h2>

                    <Chart sort displayX={x=>x + "h"}
                        data={[{
                            yName: "humidity",
                            type: ChartDataType.BAR,
                            style: {
                                color: "#2f536b",
                                backgroundColor: "#447799"
                            },
                            points: data
                        }, {
                            yName: "temperature",
                            type: ChartDataType.AREA,
                            displayTooltip: (value) => value + "°C",
                            style: {
                                color: "#CC4F38",
                                backgroundColor: "#ff6347"
                            },
                            points: data2
                        }]}
                    />

                    <Button style={{width: "200px"}} onClick={() => {
                        getTempData().then(d => setData(d))
                        getTempData().then(d => setData2(d))
                    }}>Randomize data</Button>

                    <SomeText/>
                </Site>

            </Page>

            <h3 className='color0'>Footer</h3>
        </PageLayout>
    )
}
export default App