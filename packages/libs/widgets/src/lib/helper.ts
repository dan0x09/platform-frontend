import { DataState, DataStateWrapper } from "../../types"


export async function createDataStateWrapper(dataState: DataState) {
	return {
		dataState,
		dataSets: dataState.getDataSets ? await dataState.getDataSets() : []
	} as DataStateWrapper
}

export async function hydrateDataStateWrapper(dataStateWrapper: DataStateWrapper) {
	dataStateWrapper.dataSets = dataStateWrapper.dataState.getDataSets ? await dataStateWrapper.dataState.getDataSets() : []
	return dataStateWrapper
}