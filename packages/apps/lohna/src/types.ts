import { ChartData } from "sgcomponents";

export interface DataState {
	title: string
	subtitle: string
	text: string
	subtitle1: string
	text1: string
	dataSets?: Array<ChartData>
}