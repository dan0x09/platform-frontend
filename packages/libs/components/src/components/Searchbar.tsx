import React from "react"

import {debounce} from "debounce"

interface SearchbarProps {
	id: string
	data: Array<any>
	find: (sub: any, val: string) => boolean
	setSubSet: (data: Array<any>) => void
	debounceMS?: number
}

const Searchbar: React.FC<SearchbarProps> = ({id, data, find, setSubSet, debounceMS=300}) => {

	const update = () => {
		debounce(() => {
			const value = (document.getElementById(id) as HTMLInputElement).value
			const subS = data.reduce((all, c) => {
				if(find(c, value)) all.push(c)
				return all
			}, [])

			setSubSet(subS)
		}, debounceMS)
	}
	return (
		<div>
			<input 
            	data-testid="search-bar-input" 
				type="text" 
				id={id} 
				onInput={() => update()}
			></input>
		</div>
	)
}

export default Searchbar