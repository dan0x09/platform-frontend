import React, {useState} from "react"
import { GridLayout } from "sgcomponents"
import DataWidget from "../components/DataWidget"
import { createDataStateWrapper } from "../lib/helper"
import { DataStateWrapper } from "../types"


import { Data1, Data2, Data3, Data4 } from "../data/TestDataStates"

interface WidgetsPageProps {
	columns: number,
	showData: (dataStateWrapper: DataStateWrapper) => void
}

const Widgets: React.FC<WidgetsPageProps> = ({columns, showData}) => {
	const [states, setStates] = useState(null as Array<DataStateWrapper> | null)
	if(!states) {
		(async() => {
			let s = []
			s.push(await createDataStateWrapper(Data1))
			s.push(await createDataStateWrapper(Data2))
			s.push(await createDataStateWrapper(Data3))
			s.push(await createDataStateWrapper(Data4))
			setStates(s)
		})()
	}

	const style = columns > 1 ? {minHeight: '800px', minWidth: '85%', maxWidth: '85vw'} : {minHeight: '0px'}

	if(states) return (
		<GridLayout style={style} auto columns={columns}>

			{columns < 2 && <div key="0" style={{height: '120px'}} />}

			<DataWidget key="1" show={showData} dataStateWrapper={states[0]} />

			<DataWidget key="2" show={showData} dataStateWrapper={states[1]} />

			<DataWidget key="3" show={showData} dataStateWrapper={states[3]} />

			<DataWidget key="4" big={columns > 2} show={showData} dataStateWrapper={states[0]} />

			<DataWidget key="5" show={showData} dataStateWrapper={states[2]} />

			{columns < 2 && <div key="6" style={{height: '120px'}} />}

		</GridLayout>
	)
	else return null
}

export default Widgets