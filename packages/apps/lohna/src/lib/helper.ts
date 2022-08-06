import { DataState, DataStateWrapper } from "../types";

export function isMobileThreshold(windowWidth: number) {
	return windowWidth < 1200
}

export async function createDataStateWrapper(dataState: DataState) {
	return {
		dataState,
		dataSets: dataState.getDataSets ? await dataState.getDataSets() : []
	} as DataStateWrapper
}