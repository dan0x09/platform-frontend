import React, { useState } from "react"
import { Searchbar, Page, Site, Button, Row, RowAlign, } from "sgcomponents"

import "../Style.css"


const Login: React.FC = () => {
	const items = [
		{
			name: "SILO x"
		},
		{
			name: "SILO Y"
		}
	] as Array<any>

	const [subSet, setSubSet] = useState(items)

	return (
		<Page>
			<Site>
				<Searchbar 
					id="siloSearchbar" 
					data={items} 
					find={({name}, val) => 
						val === "" ||
						(name as string).toLowerCase().includes(val.toLowerCase())} 
					setSubSet={setSubSet} 
				/>


				{subSet.map((o, i) => {
					return (
						<Button key={"" + i} className='SiloChooserButton' onClick={() => {}}>{o.name}</Button>
					)
				})}

				{/* <Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button>

				<Button className='SiloChooserButton SiloChooserButtonInactive' onClick={() => {}}>Silo X</Button> */}
			</Site>

			<Site>
				<h2>Silo X</h2>
				<p>Some information about Silo X</p>

				<Row align={RowAlign.RIGHT}>
					<Button onClick={() => window.location.href = "/silo"}>OPEN</Button>
				</Row>
			</Site>
		</Page>
	)
}

export default Login