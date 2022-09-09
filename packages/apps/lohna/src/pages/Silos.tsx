import React, { useEffect, useState } from "react"
import { Searchbar, Page, Site, Button, Row, RowAlign, } from "sgcomponents"
import { getSilageIds } from "../lib/backendMock"

import "../Style.css"


interface SilageInfoData {
	id: string
	name: string
}

const Login: React.FC = () => {
	const [items, setItems] = useState([] as Array<SilageInfoData>)
	const [subSet, setSubSet] = useState([] as Array<SilageInfoData>)
	useEffect(() => {
		(async() => {
			const silages = await getSilageIds()
			setItems(silages)
			setSubSet(silages)
		})()
	}, [])

	const [selectedSet, setSelectedSet] = useState([] as Array<string>)
	const switchSelect = (id: string) => {
		if(selectedSet.indexOf(id) === -1) setSelectedSet([...selectedSet, id])
		else setSelectedSet(selectedSet.filter((i) => i !== id))
	}
	const isSelected = (id: string) => selectedSet.indexOf(id) > -1
	const createUrlParam = () => selectedSet.reduce((all, id, i) => (all + (i === 0 ? id : "+" + id)), "")

	return (
		<Page>
			<Site>
				<Searchbar 
					label="Silage Suche"
					items={items} 
					find={({name}, val) => 
						val === "" ||
						(name as string).toLowerCase().includes(val.toLowerCase())} 
					onChange={setSubSet} 
				/>


				{subSet.map((o, i) => {
					const slctd = isSelected(o.id)
					return (
						[
							<div key={"spacer" + i} style={{marginTop: '20px'}}></div>,
							<Button key={"" + i} className={slctd ? 'SiloChooserButton SiloChooserButtonActive' : 'SiloChooserButton'} onClick={() => switchSelect(o.id)}>{o.name}</Button>
						]
					)
				})}

				<Row style={{marginTop: '20px'}} align={RowAlign.MID}>
					<Button onClick={() => window.location.href = "/silo/" + createUrlParam()}>OPEN</Button>
				</Row>

				{/* <Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button> */}
			</Site>
		</Page>
	)
}

export default Login