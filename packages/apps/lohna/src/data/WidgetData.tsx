import { WidgetState } from "sgwidgets/src"

// Might change with actual backend
interface getWidgetsProps {
	silageId: number
}

const getWidgets = ({
	silageId
}: getWidgetsProps) => {
	return [

	] as Array<WidgetState>
}

export default  getWidgets