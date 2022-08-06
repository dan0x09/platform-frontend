import React, {useState} from 'react'
import { PageLayout, Page } from 'sgcomponents'
import { isMobileThreshold } from '../lib/helper'


import '../Style.css'
import Footer from './Footer'
import Header from './Header'

interface PageProps {
	children: React.ReactNode
	header?: boolean
	footer?: boolean
}

const PageWrapper: React.FC<PageProps> = ({children, header=false, footer=false}) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useState(window.addEventListener("resize", () => setWindowWidth(window.innerWidth)))

	return (
		<PageLayout>
			{header ? <Header>TEST DATA</Header> : <div></div>}

			<Page mobile={isMobileThreshold(windowWidth)}>
				{children}
			</Page>

			{footer ? <Footer></Footer> : <div></div>}
		</PageLayout>
	)
}

export default PageWrapper