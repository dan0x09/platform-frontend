import React from "react"
import {debounce} from "debounce"

import "../Style.css"

interface SearchbarProps {
	items: Array<any>
	find: (sub: any, val: string) => boolean
	onChange: (data: Array<any>) => void
	debounceMS?: number
	label: string
}

const Searchbar: React.FC<SearchbarProps> = ({items, find, onChange, debounceMS=300, label}) => {
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
			<label className="_Searchbar color0 Searchbar">
				<input 
					data-testid="search-bar-input" 
					type="text"
					onInput={update}
				></input>
				{label}
			</label>
		</div>
	)
}

export default Searchbar