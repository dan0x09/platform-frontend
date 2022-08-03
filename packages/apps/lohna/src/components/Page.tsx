import React from 'react'
import { PageLayout, Page } from 'sgcomponents'


import '../Style.css'
import Footer from './Footer'
import Header from './Header'

interface PageProps {
	children: React.ReactNode
}

const PageWrapper: React.FC<PageProps> = ({children}) => {
	return (
        <PageLayout>
			<Header>TEST DATA</Header>

            <Page>
				{children}
            </Page>

			<Footer></Footer>
        </PageLayout>
	)
}

export default PageWrapper