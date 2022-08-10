import { WidgetState, WidgetStateWrapper } from "../types"


export async function createWidgetStateWrapper(widgetState: WidgetState) {
	return {
		widgetState,
		dataSets: widgetState.getDataSets ? await widgetState.getDataSets() : []
	} as WidgetStateWrapper
}

export async function hydrateWidgetStateWrapper(widgetStateWrapper: WidgetStateWrapper) {
	widgetStateWrapper.dataSets = widgetStateWrapper.widgetState.getDataSets ? await widgetStateWrapper.widgetState.getDataSets() : []
	return widgetStateWrapper
}