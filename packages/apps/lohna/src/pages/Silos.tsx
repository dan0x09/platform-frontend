import React, { useState } from "react"
import { Searchbar, Page, Site, Button, Row, RowAlign, } from "sgcomponents"

import "../Style.css"


const Login: React.FC = () => {
	const items = [
		{
			id: "0",
			name: "SILO x"
		},
		{
			id: "1",
			name: "SILO y"
		},
		{
			id: "2",
			name: "SILO z"
		},
		{
			id: "4",
			name: "SILO 1"
		},
		{
			id: "siloId",
			name: "SILO 2"
		}
	] as Array<any>

	const [subSet, setSubSet] = useState(items)

	const [selectedSet, setSelectedSet] = useState([] as Array<number>)
	const switchSelect = (id: number) => {
		if(selectedSet.indexOf(id) === -1) setSelectedSet([...selectedSet, id])
		else setSelectedSet(selectedSet.filter((i) => i !== id))
	}
	const isSelected = (id: number) => selectedSet.indexOf(id) > -1
	const createUrlParam = () => selectedSet.reduce((all, id, i) => (all + (i === 0 ? id : "+" + id)), "")

	return (
		<Page>
			<Site>
				<Searchbar 
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
							<div style={{marginTop: '20px'}}></div>,
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