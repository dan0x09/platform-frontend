import React from "react";
import { ChartData, StyleProps } from "sgcomponents";

export enum WidgetDisplayType {
	CUSTOM="custom", // widget with custom components
	SIMPLE="simple", // widget with basic text
	DATA="data"		 // widget with text and data
}

// function to show a widget on display
export type ShowWidgetFunction = (widgetStateWrapper: WidgetStateWrapper) => void

// function to fetch a widgets data (again)
export type RefreshWidgetFunction = (options?: any) => void

// function to render a custom widget component
export type WidgetStateComponent = (widgetStateWrapper: WidgetStateWrapper, show: ShowWidgetFunction, refresh: RefreshWidgetFunction) => React.ReactNode

// function to render a custom widget display component
export type WidgetDisplayStateComponent = (widgetStateWrapper: WidgetStateWrapper, refresh: RefreshWidgetFunction) => React.ReactNode

export interface WidgetState {
	// what will this widget look like
	widgetType?: WidgetDisplayType
	displayType: WidgetDisplayType
	// basic fields widgets will use
	big?: boolean
	// buttons
	refreshText?: React.ReactNode
	showText?: React.ReactNode
	// content
	title?: React.ReactNode
	subtitle?: React.ReactNode
	text?: React.ReactNode
	informationComponent?: WidgetDisplayStateComponent
	// more advanced fields some widgets will use
	subtitle1?: React.ReactNode
	text1?: React.ReactNode
	getData?: (options?: any) => Promise<any | undefined>
	getDataSets?: (options?: any) => Promise<Array<ChartData>>
	// fields a custom widget will use
	widgetComponent?: WidgetStateComponent
	displayComponent?: WidgetDisplayStateComponent
	displayComponentRight?: WidgetDisplayStateComponent
}

export interface WidgetStateWrapper {
	// settings regarding a widget
	widgetState: WidgetState
	// data, which is fetched and used by some widgets
	data?: any
	dataSets: Array<ChartData>
}

export interface WidgetProps {
	// function to switch to the display component
	show: (widgetStateWrapper: WidgetStateWrapper) => void
	// a widget with possibly fetched data
	widgetStateWrapper: WidgetStateWrapper
	// whether to expand over 2 fields (WidgetGrid)
	big?: boolean
	// whether to expand to full width (WidgetGrid)
	mobile?: boolean
}

export interface WidgetGridProps extends StyleProps {
	// widgets to render
	widgets: Array<WidgetState>
	// what happens when expanding a widget
	show: ShowWidgetFunction
	// whether to render as list or grid
	mobile?: boolean
}

export interface WidgetDisplayProps extends StyleProps {
	// a widget with possibly fetched data
    widgetStateWrapper: WidgetStateWrapper
	// a setter to update a widgets data
    setWidgetStateWrapper: (widgetStateWrapper: WidgetStateWrapper) => void
	// decides on rendering
    mobile?: boolean
}