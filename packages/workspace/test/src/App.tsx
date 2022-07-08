import TEST2 from 'test2'
import { GridLayout, Page, Site, PageLayout, SiteAlign } from 'sgcomponents'
import './Style.css'

const App = () => {
    return (
        <PageLayout>
            <h2>{TEST2}</h2>

            <Page>
                <Site>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque placeat sint nobis fugiat aliquam quos blanditiis, totam ducimus corrupti dolore amet commodi, iure voluptatum libero quibusdam voluptatem, eos porro ipsam.</p>  
                </Site>

                <Site align={SiteAlign.TOP}>
                    <h2>Ok</h2>

                    <GridLayout auto height="50vh" width="90%">

                    </GridLayout>
                </Site>
            </Page>

            <h3>Footer</h3>
        </PageLayout>
    )
}
export default App