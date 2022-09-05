import { WidgetState, WidgetStateWrapper } from "../types"


export async function createWidgetStateWrapper(widgetState: WidgetState, options?: any) {
	return {
		widgetState,
		data: widgetState.getData ? await widgetState.getData(options) : undefined,
		dataSets: widgetState.getDataSets ? await widgetState.getDataSets(options) : []
	} as WidgetStateWrapper
}

export async function hydrateWidgetStateWrapper(widgetStateWrapper: WidgetStateWrapper, options?: any) {
	widgetStateWrapper.data = widgetStateWrapper.widgetState.getData ? await widgetStateWrapper.widgetState.getData(options) : undefined
	widgetStateWrapper.dataSets = widgetStateWrapper.widgetState.getDataSets ? await widgetStateWrapper.widgetState.getDataSets(options) : []
	return widgetStateWrapper
}