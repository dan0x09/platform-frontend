import React from "react";
import { ChartData } from "sgcomponents";

export enum WidgetDisplayType {
	CUSTOM="custom",
	SIMPLE="simple",
	DATA="data"
}

export type ShowWidgetFunction = (widgetStateWrapper: WidgetStateWrapper) => void

export type RefreshWidgetFunction = () => void

export type WidgetStateComponent = (widgetStateWrapper: WidgetStateWrapper, show: ShowWidgetFunction, refresh: RefreshWidgetFunction) => React.ReactNode

export type WidgetDisplayStateComponent = (widgetStateWrapper: WidgetStateWrapper, refresh: RefreshWidgetFunction) => React.ReactNode

export interface WidgetState {
	displayType: WidgetDisplayType
	big?: boolean
	title?: string
	subtitle?: string
	text?: string
	informationComponent?: WidgetDisplayStateComponent
	subtitle1?: string
	text1?: string
	getDataSets?: () => Promise<Array<ChartData>>
	widgetComponent?: WidgetStateComponent
	displayComponent?: WidgetDisplayStateComponent
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