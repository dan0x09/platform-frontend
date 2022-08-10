import React from "react";
import { ChartData } from "sgcomponents";

export enum WidgetDisplayType {
	CUSTOM="custom",
	DATA="data"
}

export type ShowWidgetFunction = (widgetStateWrapper: WidgetStateWrapper) => void

export type WidgetStateComponent = (widgetStateWrapper: WidgetStateWrapper, show?: ShowWidgetFunction, refresh?: () => void) => React.ReactNode

export interface WidgetState {
	displayType: WidgetDisplayType
	big?: boolean
	title?: string
	subtitle?: string
	text?: string
	informationComponent?: WidgetStateComponent
	subtitle1?: string
	text1?: string
	getDataSets?: () => Promise<Array<ChartData>>
	widgetComponent?: WidgetStateComponent
	displayComponent?: WidgetStateComponent
}

export interface WidgetStateWrapper {
	widgetState: WidgetState
	dataSets: Array<ChartData>
}

export interface WidgetProps {
	show: (widgetStateWrapper: WidgetStateWrapper) => void
	widgetStateWrapper: WidgetStateWrapper
	big?: boolean
	mobile?: boolean
}