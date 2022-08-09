import React from "react";
import { ChartData } from "sgcomponents";

export enum DataDisplayType {
	CUSTOM="custom",
	DATA="data"
}

export type DataStateComponent = (dataStateWrapper: DataStateWrapper) => React.ReactNode

export interface DataState {
	displayType: DataDisplayType
	title?: string
	subtitle?: string
	text?: string
	subtitle1?: string
	text1?: string
	getDataSets?: () => Promise<Array<ChartData>>
	widgetComponent?: DataStateComponent
	displayComponent?: DataStateComponent
}

export interface DataStateWrapper {
	dataState: DataState
	dataSets: Array<ChartData>
}