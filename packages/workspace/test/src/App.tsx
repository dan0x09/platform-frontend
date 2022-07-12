import TEST2 from 'test2'
import { GridLayout, Page, Site, PageLayout, SiteAlign, Button, FAB } from 'sgcomponents'
import './Style.css'

const App = () => {
    return (
        <PageLayout>
            <h2 className='color0'>{TEST2}</h2>

            <Page>
                <Site>
                    <Button onClick={() => {}}>Moin</Button>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium, aut nesciunt vel deleniti officiis sit quo optio ducimus ab quae odit esse atque exercitationem accusamus laborum fugit distinctio magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam eveniet perspiciatis quia, eos facilis alias, vero fuga ad, inventore aperiam libero veritatis explicabo quibusdam fugit dicta tempore! Recusandae, maiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque ducimus maxime illum vero, aliquid quae voluptate modi beatae dignissimos minus? Eaque sapiente aperiam aut quidem velit nisi hic temporibus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quidem adipisci asperiores facilis quaerat qui quibusdam animi dolor, ipsum provident aperiam eligendi esse optio soluta. Excepturi mollitia tenetur quis illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex facere amet, facilis vero fugit similique dolore! Quo, dolorum. Possimus, molestias veniam? Esse, maiores minima quae corrupti nisi modi ducimus.LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque placeat sint nobis fugiat aliquam quos blanditiis, totam ducimus corrupti dolore amet commodi, iure voluptatum libero quibusdam voluptatem, eos porro ipsam.</p>
                
                    <FAB onClick={() => {}}/>  
                </Site>

                <Site align={SiteAlign.TOP}>
                    <h2>Ok</h2>

                    <GridLayout auto height="50vh" width="90%">

                    </GridLayout>
                </Site>

            </Page>

            <h3 className='color0'>Footer</h3>
        </PageLayout>
    )
}
export default App