# sgcomponents - Charts

## introduction
The Recharts module for react is used to display charts in a responsive way. Recharts data structure does not allow to combine data sets on the fly, therefore we created a function to overcome this problem. A sgcomponents-Chart takes a list of data sets, which will be displayed at the same time, thanks to Rechart's composed charts. The data sets share the x-axis, while x values can be either numbers or strings. The y-axis displays numbers as values.

## data sets
The `data` property takes a list of ChartData lists. Because one chart can display multiple data sets at once, each data set has it's own settings. One needs to set a name for the set, defined with `yName`. On top of that, there is the possibility to set a chart `type`, which defaults to `LINE`, as well as some styling and the data points, which is a list of tuple-like lists, where the first value represents the x-axis and can be either a number or a string, while the second value represents the y-axis and is a number.

A downside of giving this tool for data set combination is, that the x-axis must be shared completely between the individual sets, because Recharts runs into problems when displaying sets which only share some of the x values.

The data sets are using a `style` property, which features fields like `backgroundColor` and `color`. 

On top of that each data set can alter the way a tooltip is shown, by using the field `displayTooltip`: 

``` (value, name) => value | [value, name] ``` 

## x-axis
Points can be sorted by x value, which is indicated by setting the optional property `sort`. The sorting will put strings before numbers and orders strings alphabetically and numbers by size. This will result in "24h" being sorted before "3h", which most likely is not what is intended. For that case we implemented a function, which can be set with the `displayX` property. It alters x values after they got sorted, we now can define a data set with the x values ranging from 1 to 24, which will be sorted by size, and then be renamed with a function like ``` x => x + "h" ``` to get better results.