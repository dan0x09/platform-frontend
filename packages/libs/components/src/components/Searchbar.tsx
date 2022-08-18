import React from "react"

import {debounce} from "debounce"

interface SearchbarProps {
	items: Array<any>
	find: (sub: any, val: string) => boolean
	onChange: (data: Array<any>) => void
	debounceMS?: number
}

const Searchbar: React.FC<SearchbarProps> = ({items, find, onChange, debounceMS=300}) => {
	const update = (e: React.ChangeEvent<HTMLInputElement>): void => {
		debounce(() => {
			const value = e.target.value
			const subS = items.reduce((all, c) => {
				if(find(c, value)) all.push(c)
				return all
			}, [])

			onChange(subS)
		}, debounceMS)()
	}
	return (
		<div>
			<input 
            	data-testid="search-bar-input" 
				type="text"
				onInput={update}
			></input>
		</div>
	)
}

export default Searchbar