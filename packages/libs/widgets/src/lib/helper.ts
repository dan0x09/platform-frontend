import { WidgetState, WidgetStateWrapper } from "../types"


export async function createWidgetStateWrapper(widgetState: WidgetState, options?: any) {
	return {
		widgetState,
		dataSets: widgetState.getDataSets ? await widgetState.getDataSets(options) : []
	} as WidgetStateWrapper
}

export async function hydrateWidgetStateWrapper(widgetStateWrapper: WidgetStateWrapper, options?: any) {
	widgetStateWrapper.dataSets = widgetStateWrapper.widgetState.getDataSets ? await widgetStateWrapper.widgetState.getDataSets(options) : []
	return widgetStateWrapper
}