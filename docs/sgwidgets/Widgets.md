# Widgets

## configuration
By using the sgwidgets module, we can implement widgets, without the need to care for styling. Widgets come with different types, one of them featuring charts from the sgcomponents module out of the box. 
The configuration allows to implement a widget as object. This object can be displayed with the WidgetGrid, but can also be displayed with more detail using the WidgetDisplay. Both components can be implemented alongside each other, while the first will take a list of widget configurations, as well as a callback when an user selects a widget, the other component takes one widget configuration to show in detail. This allows the developer to place both components in different locations by connecting them with a react state, f.e.

Most fields in a widget configuration can be either a component, a string, a number, or null, indicated by the React.ReactNode type. Other fields, such as the informationComponent property take a function as argument, which, if specified, should return a React.ReactNode but take a wrapped widget configuration as input, as well as a function to refresh data. Components, which are widget exclusive and are not displayed by the WidgetDisplay take a third argument, which is a fucntion triggering the callback for selecting a widget configuration via WidgetGrid.

Widget configurations can be stored in extra files with an exported member, or directly inside of page files using `const` f.e.

## wrapped configurations + data
Widget configurations get wrapped internally, which allows to store fetched data within an object which also carries the configuration. That allows a developer to specify a function to aquire data remotely (async) and being able to reuse already fetched data. Data gets fetched automatically when a widget is loading and then could never be fetched again. However the refresh function is implemented in some widget types, by displaying a corresponding button. By implementing the getDataSets function, the developer has no need to design a data flow, the widget module handles that. The function is async and any async tasks inside should be awaited.

## WidgetGrid
The widget grid takes a list of widget configurations, a callback for choosing a widget, a style, className and a boolean property for deciding whether widgets shall be displayed for mobile devices. This property can be synchronized with the concept of the corresponding application.

## WidgetDisplay
The widget display takes a widget wrapper, which can also feature data as property. Another property is a callback, which is used to update the stored wrapper, so updates are flushed through the react state. Like the WidgetGrid, a WidgetDisplay also uses style, className and mobile properties.

## types
Widgets feature different types for layouts, however the big property as well as the displayType are featured by all widgets:

### simple
The SIMPLE type offers fields for title and text and the display component shows one side.
Fields, which can be used are: title, subtitle, text, informationComponent

### data
The DATA type offers fields featured by a SIMPLE widget, but also implements a second side for the DisplayComponent, as well as a sgcomponents chart.
Fields used by the DATA widget are: title, subtitle, text, informationComponent, subtitle1, text1, getDataSets

### custom
The CUSTOM type is using the fields widgetComponent and displayComponent as well as displayComponentRight, which represent both sides of a widget, the content inside of a widget within the WidgetGrid and the content featured in a WidgetDisplay.
These functions take the widgetStateWrapper as first argument, which features the widgetState, fetched dataSets and data. The second argument is a function to trigger the show event for the widget component. For the display components it is a function to trigger the data refresh. This is also implemented as the third argument of the widget component.
Furthermore and can be useful to implement getData, which returns an object of type any, while async tasks can be executed here. getData is called together with getDataSets in the background, on first render and on clicking refresh.
