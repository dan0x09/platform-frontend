# sgcomponents - Charts

## introduction
The Recharts module for react is used to display charts in a responsive way. Recharts data structure does not allow to combine data sets on the fly, therefore we created a function to overcome this problem. A sgcomponents-Chart takes a list of data sets, which will be displayed at the same time, thanks to Rechart's composed charts. The data sets share the x-axis, while x values can be either numbers or strings. The y-axis displays numbers as values.

## data sets
The `data` property takes a list of ChartData lists. Because one chart can display multiple data sets at once, each data set has it's own settings. One needs to set a name for the set, defined with `yName`. On top of that, there is the possibility to set a chart `type`, which defaults to `LINE`, as well as some styling and the data points, which is a list of tuple-like lists, where the first value represents the x-axis and can be either a number or a string, while the second value represents the y-axis and is a number.

The data sets are using a `style` property, which features fields like `backgroundColor` and `color`. 

On top of that each data set can alter the way a tooltip is shown, by using the field `displayTooltip`: 

``` (value, name) => value | [value, name] ``` 

## x-axis
We implemented a function, which can be set with the `displayX` property. It alters x values before getting displayed, we now can define a data set with the x values ranging from 1 to 24 and then be renamed with a function like ``` x => x + "h" ``` to get better results while data remains a list of numbers.

## example

```
const dataSets = [{
	// identifier for this set
	yName: "height",
	// changes tooltips, takes the y value and the name of the set
	displayTooltip: (value, name) => ["" + value + " m", name + " in m"],
	// sets line and backgroundColor
	style: {
		color: '#3B2D8F',
		backgroundColor: '#4A39B3'
	},
	// types are AREA, LINE, BAR, PIE
	type: ChartDataType.AREA,
	// points are lists of tuples [[number | string, number], ...]
	points: [["Building", 20], ...]
} as ChartData,
{
	yName: "height 2",
	style: {
		color: '#3B2D8F',
		backgroundColor: '#4A39B3'
	},
	type: ChartDataType.LINE,
	points: [["Building", 10], ...]
} as ChartData]


<Chart 
	displayX={x => "- " + x + " -"}
	maxHeight={200}
	data={dataSets}
/>
```