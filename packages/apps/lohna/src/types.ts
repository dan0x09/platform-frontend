import { ChartData } from "sgcomponents";

export interface DataState {
	title: string
	subtitle: string
	text: string
	subtitle1: string
	text1: string
	getDataSets?: () => Promise<Array<ChartData>>
}

export interface DataStateWrapper {
	dataState: DataState
	dataSets: Array<ChartData>
}