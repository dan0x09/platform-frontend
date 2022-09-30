# Components

Most compoments implement the properties `className` and `style` by extending from `StyleProps` (./src/types.ts).
An IDE might provide type definitions by using suggestions. Types can be found in ./src/types.ts and in the files of the specific component in ./src/components/.

## Button

```

<Button onClick={() => {
	// Do sth..
}}>
	Text and / or components
</Button>

```


## FAB - Floating Action Button

```

<FAB onClick={() => {}} toggle styleActive={{backgroundColor: 'green'}}>
	x
</FAB>

```

## ErrorPage

```
<ErrorPage />
```

## GridLayout

The `auto` property can set to wrap the items within the grid in container, which have the correct width. Therfore the `columns` property has to be defined.

```
<GridLayout style={style} className={className} auto columns={3}>
	{
		list.map((item, index) => {
			return (
				<div style={{width: '100%', height: 400}}></div>
			)
		})
	}
</GridLayout>
```

## ApplicationWrapper
The following shows an entry point of a possible React app. The ApplicationWrapper wraps a routing component.

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApplicationWrapper } from 'sgcomponents'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Router from './Router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ApplicationWrapper>
      <Router />
    </ApplicationWrapper>
  </React.StrictMode>
)
export default root

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

```

## Page, Site, Row

A Page can hold up to two elements, respectively Sites. A Row can be used to quickly build layouts.

```
<Page>
	<Site>
		<Row style={{marginTop: '20px'}} align={RowAlign.MID}>
			<Button onClick={() => {}} />
			<Button onClick={() => {}} />
			<Button onClick={() => {}} />
		</Row>
		
		<Row space={'10vw'} spaceAround>
			<h1>Welcome!</h1>
			<h2>nice to meet you.</h2>
		</Row>
	</Site>

	<Site align={SiteAlign.LEFT}>
		<h3>TODO</h3>
		
		<p>[x] Write documentation</p>
	</Site>
</Page>

```

## Searchbar

A Searchbar can filter a list of items, which are of the any type. With a function callback named `find` it is possible to specify a filter. `find` is called whenever an item is checked for the filter.
`debounceMS` is used to delay user input to prevent high loads of calculations when a user tips fast.

```
const items = [ {name: "test"}, ... ] as Array<any>
const [subSet, setSubSet] = useState(items)

...

<Searchbar 
	label={"Something descriptive."}
	items={items} 
	find={({name}, val) => 
		val === "" ||
		(name as string).toLowerCase().includes(val.toLowerCase())} 
	onChange={setSubSet}
	debounceMS={400}
/>

{subSet.map(...)}
```
