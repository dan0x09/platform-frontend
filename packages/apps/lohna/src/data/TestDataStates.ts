import { fetchTemperatureData } from "sgapi"
import { ChartDataPoint, ChartDataType } from "sgcomponents"
import { WidgetState, WidgetDisplayType } from "sgwidgets"

import "../Style.css"

const Data1: WidgetState = 
{
	displayType: WidgetDisplayType.DATA,
	title: "Humidity",
	subtitle: "some data",
	text: ".......",
	subtitle1: "Humidity",
	text1: "some data about humidity",
	getDataSets: async () => {
		const 	d1 = await fetchTemperatureData() as Array<ChartDataPoint>,
			d2 = await fetchTemperatureData() as Array<ChartDataPoint>
		
		return [{
			yName: "Humidity field 0",
			type: ChartDataType.AREA,
			displayTooltip: (value) => value.toFixed(2),
			style: {
				color: "#2f536b",
				backgroundColor: "#447799"
			},
			points: d1
		}, {
			yName: "Humidity field 1",
			type: ChartDataType.LINE,
			displayTooltip: (value) => value.toFixed(2) + " °C",
			style: {
				color: "#CC4F38",
				backgroundColor: "#ff6347"
			},
			points: d2
		}]
	}
}


const Data2: WidgetState = 
{
	displayType: WidgetDisplayType.DATA,
	big: true,
	title: "Temperature",
	subtitle: "some data",
	text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat scelerisque. Et magnis dis parturient montes. Diam maecenas sed enim ut sem viverra aliquet eget sit. Facilisis volutpat est velit egestas dui. Mauris augue neque gravida in fermentum et sollicitudin. Viverra vitae congue eu consequat ac felis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Id ornare arcu odio ut. Volutpat consequat mauris nunc congue nisi vitae. Est ante in nibh mauris. Quisque sagittis purus sit amet volutpat. Ipsum a arcu cursus vitae congue.

	Duis at consectetur lorem donec massa sapien. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Nec dui nunc mattis enim ut tellus. Sapien eget mi proin sed libero enim sed faucibus. Diam volutpat commodo sed egestas egestas. Nunc mattis enim ut tellus elementum sagittis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Dui vivamus arcu felis bibendum ut tristique et egestas. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra maecenas accumsan lacus vel facilisis volutpat est.
	
	At volutpat diam ut venenatis tellus in. Dignissim sodales ut eu sem integer vitae justo eget magna. Quisque non tellus orci ac. Adipiscing tristique risus nec feugiat in fermentum posuere. Tellus pellentesque eu tincidunt tortor. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Consectetur lorem donec massa sapien. Tellus elementum sagittis vitae et leo duis ut diam quam. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Et egestas quis ipsum suspendisse ultrices. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Gravida in fermentum et sollicitudin. Turpis egestas pretium aenean pharetra magna. Aenean et tortor at risus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Consequat id porta nibh venenatis cras. Blandit cursus risus at ultrices mi tempus. Et malesuada fames ac turpis egestas sed.
	
	Id aliquet lectus proin nibh nisl condimentum id. Congue mauris rhoncus aenean vel elit scelerisque mauris. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Sit amet nisl purus in. A arcu cursus vitae congue mauris rhoncus aenean vel. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nec sagittis aliquam malesuada bibendum arcu vitae.
	
	Libero nunc consequat interdum varius sit amet mattis vulputate. Sapien eget mi proin sed libero enim sed faucibus. Morbi leo urna molestie at elementum eu. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Arcu vitae elementum curabitur vitae nunc sed velit. Cursus eget nunc scelerisque viverra mauris. Arcu bibendum at varius vel pharetra vel turpis nunc. Fusce id velit ut tortor pretium viverra. Senectus et netus et malesuada. Mi eget mauris pharetra et. In vitae turpis massa sed elementum tempus egestas. Facilisis gravida neque convallis a cras semper. Tristique senectus et netus et malesuada fames ac. Volutpat est velit egestas dui id ornare arcu odio ut. Quam adipiscing vitae proin sagittis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Massa id neque aliquam vestibulum morbi. Netus et malesuada fames ac. Pharetra pharetra massa massa ultricies mi quis hendrerit.
	
	Egestas diam in arcu cursus euismod quis viverra nibh. Purus gravida quis blandit turpis cursus in hac habitasse platea. Lobortis feugiat vivamus at augue. Dui faucibus in ornare quam viverra orci sagittis. Et egestas quis ipsum suspendisse ultrices gravida. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing diam donec adipiscing tristique risus nec feugiat. Ipsum dolor sit amet consectetur adipiscing elit ut. Nunc sed blandit libero volutpat. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Magna ac placerat vestibulum lectus mauris ultrices. Duis convallis convallis tellus id interdum. Sit amet aliquam id diam maecenas. Vitae congue eu consequat ac felis. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Leo integer malesuada nunc vel.
	
	Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Tristique senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed viverra. Venenatis cras sed felis eget velit aliquet sagittis. Cursus metus aliquam eleifend mi in nulla posuere. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Lectus proin nibh nisl condimentum. Orci dapibus ultrices in iaculis nunc sed. Morbi tristique senectus et netus et malesuada fames ac turpis. Eleifend mi in nulla posuere sollicitudin aliquam ultrices.
	
	Pretium viverra suspendisse potenti nullam ac. Leo vel fringilla est ullamcorper. Turpis tincidunt id aliquet risus. Nibh tortor id aliquet lectus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Odio pellentesque diam volutpat commodo. Maecenas sed enim ut sem viverra aliquet eget sit amet. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tempus quam pellentesque nec nam. Sit amet consectetur adipiscing elit ut. Aliquam eleifend mi in nulla posuere sollicitudin. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Cras fermentum odio eu feugiat pretium nibh ipsum.
	
	Viverra maecenas accumsan lacus vel facilisis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ut faucibus pulvinar elementum integer enim. Curabitur gravida arcu ac tortor. Eu lobortis elementum nibh tellus. Rhoncus urna neque viverra justo nec ultrices dui. Aliquet bibendum enim facilisis gravida neque convallis. Eget mi proin sed libero enim. Enim ut tellus elementum sagittis vitae et. Lobortis mattis aliquam faucibus purus. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Porta nibh venenatis cras sed felis eget velit aliquet. Feugiat vivamus at augue eget arcu dictum. At volutpat diam ut venenatis. Amet mattis vulputate enim nulla. Amet commodo nulla facilisi nullam. Dolor magna eget est lorem ipsum dolor sit amet consectetur.
	
	Justo donec enim diam vulputate ut. Aenean sed adipiscing diam donec adipiscing tristique. Vitae turpis massa sed elementum tempus egestas sed sed. Quis vel eros donec ac odio tempor orci dapibus ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Vitae aliquet nec ullamcorper sit amet. Sollicitudin ac orci phasellus egestas. Neque sodales ut etiam sit amet. Ut eu sem integer vitae justo eget magna fermentum iaculis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sed risus pretium quam vulputate dignissim suspendisse in. Ornare lectus sit amet est placerat. Mi sit amet mauris commodo quis imperdiet massa.
	
	Nullam ac tortor vitae purus faucibus ornare. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Eros donec ac odio tempor orci dapibus ultrices in. Scelerisque fermentum dui faucibus in ornare quam. Id diam vel quam elementum pulvinar etiam non quam lacus. Et magnis dis parturient montes nascetur ridiculus mus mauris. Non blandit massa enim nec dui nunc mattis enim ut. Pretium nibh ipsum consequat nisl. Purus semper eget duis at tellus. Fusce ut placerat orci nulla. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
	
	Porta lorem mollis aliquam ut porttitor. Ultrices gravida dictum fusce ut placerat orci. In nibh mauris cursus mattis. Purus sit amet volutpat consequat mauris nunc congue nisi. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Sit amet commodo nulla facilisi nullam vehicula ipsum. Interdum varius sit amet mattis. Augue mauris augue neque gravida in. Sed arcu non odio euismod lacinia at quis risus. Purus in massa tempor nec feugiat nisl pretium. Elit at imperdiet dui accumsan sit. Lacus sed viverra tellus in hac habitasse. Arcu dictum varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
	
	Egestas integer eget aliquet nibh praesent tristique magna. Tristique sollicitudin nibh sit amet. Pharetra magna ac placerat vestibulum lectus. Ut pharetra sit amet aliquam id. Quisque egestas diam in arcu cursus euismod. Habitant morbi tristique senectus et netus et. Id faucibus nisl tincidunt eget nullam non. Ultrices dui sapien eget mi proin sed libero. Parturient montes nascetur ridiculus mus mauris vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing. Blandit libero volutpat sed cras ornare arcu dui vivamus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Quis auctor elit sed vulputate.
	
	Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Ut eu sem integer vitae justo eget magna. Eget lorem dolor sed viverra. Morbi tempus iaculis urna id volutpat lacus laoreet. Velit egestas dui id ornare arcu odio ut sem. Nisi est sit amet facilisis magna etiam tempor. Luctus venenatis lectus magna fringilla. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Magna fringilla urna porttitor rhoncus dolor purus. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit scelerisque in dictum non consectetur a erat nam. Ultricies leo integer malesuada nunc vel risus commodo viverra. Vitae elementum curabitur vitae nunc sed velit dignissim.
	
	Rutrum quisque non tellus orci ac auctor augue. Amet tellus cras adipiscing enim eu. Augue lacus viverra vitae congue. Pellentesque elit eget gravida cum sociis natoque. Enim sed faucibus turpis in eu mi bibendum. Et netus et malesuada fames ac. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Vitae tempus quam pellentesque nec nam aliquam sem. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Felis eget velit aliquet sagittis id consectetur purus ut.
	
	Fermentum iaculis eu non diam phasellus vestibulum. Cursus risus at ultrices mi tempus imperdiet. Ultrices dui sapien eget mi proin sed libero. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Amet mauris commodo quis imperdiet massa tincidunt. Felis eget nunc lobortis mattis. Tempus quam pellentesque nec nam aliquam. At augue eget arcu dictum varius duis. Tristique nulla aliquet enim tortor at auctor urna. Eu augue ut lectus arcu bibendum at. Ultrices sagittis orci a scelerisque purus semper eget. Dictum fusce ut placerat orci nulla. Sem viverra aliquet eget sit amet tellus cras adipiscing. Euismod lacinia at quis risus sed vulputate odio ut enim. Nulla malesuada pellentesque elit eget gravida cum sociis. Nunc sed blandit libero volutpat sed cras ornare.
	
	Convallis a cras semper auctor neque vitae tempus quam. Justo donec enim diam vulputate ut pharetra sit. Dui id ornare arcu odio ut sem nulla pharetra diam. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Massa id neque aliquam vestibulum morbi blandit cursus risus. Eros donec ac odio tempor orci dapibus ultrices in. Nec ullamcorper sit amet risus nullam. Lectus nulla at volutpat diam ut venenatis. Nec ullamcorper sit amet risus. Sit amet facilisis magna etiam tempor orci eu. Porta nibh venenatis cras sed. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nec ultrices dui sapien eget mi proin. Diam maecenas ultricies mi eget. Elementum nisi quis eleifend quam. Ultrices mi tempus imperdiet nulla malesuada. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.
	
	Nisi porta lorem mollis aliquam ut porttitor. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Interdum posuere lorem ipsum dolor sit amet consectetur. Potenti nullam ac tortor vitae. Sed arcu non odio euismod lacinia at. Viverra orci sagittis eu volutpat odio facilisis. In hac habitasse platea dictumst vestibulum rhoncus. Egestas fringilla phasellus faucibus scelerisque. Orci a scelerisque purus semper eget. Cursus mattis molestie a iaculis. Morbi non arcu risus quis varius quam quisque. Vitae et leo duis ut diam quam nulla porttitor. Porta nibh venenatis cras sed felis eget. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Donec ultrices tincidunt arcu non sodales neque. Consequat id porta nibh venenatis cras sed felis eget. Diam vulputate ut pharetra sit amet aliquam. Porttitor eget dolor morbi non arcu. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet consectetur adipiscing elit.
	
	Auctor augue mauris augue neque gravida in fermentum et. A erat nam at lectus urna. Cursus in hac habitasse platea dictumst quisque sagittis purus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem mollis aliquam ut porttitor. Aliquet eget sit amet tellus cras adipiscing enim. Nunc consequat interdum varius sit amet mattis vulputate enim. Tortor dignissim convallis aenean et tortor at risus viverra. Sollicitudin nibh sit amet commodo nulla. Urna condimentum mattis pellentesque id. Ornare arcu odio ut sem nulla pharetra diam. Sed blandit libero volutpat sed. In pellentesque massa placerat duis ultricies. Aliquam sem fringilla ut morbi tincidunt augue interdum.
	
	Vel turpis nunc eget lorem. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Amet dictum sit amet justo donec enim. Nam at lectus urna duis. Dui accumsan sit amet nulla. Proin sed libero enim sed faucibus turpis. At auctor urna nunc id cursus metus aliquam eleifend mi. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Tincidunt eget nullam non nisi est sit amet facilisis magna. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Diam maecenas ultricies mi eget mauris pharetra. In fermentum posuere urna nec tincidunt praesent. Semper risus in hendrerit gravida rutrum quisque.`,
	subtitle1: "Temperature of the silos",
	text1: "some data about temperature",
	getDataSets: async () => {
		const d1 = await fetchTemperatureData() as Array<ChartDataPoint>
		
		return [{
			yName: "Temperature",
			type: ChartDataType.AREA,
			displayTooltip: (value) => value.toFixed(2),
			style: {
				color: "#CC4F38",
				backgroundColor: "#ff6347"
			},
			points: d1
		}]
	}
}

const Data3 : WidgetState = 
{
	displayType: WidgetDisplayType.CUSTOM,
	widgetComponent: ({widgetState}) => "Das ist ein neues Widget"
}

const Data4 : WidgetState = 
{
	displayType: WidgetDisplayType.DATA,
	title: "Something else",
	text: "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
		+ "This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling. This is a text to test some styling."
}

export {
	Data1,
	Data2,
	Data3,
	Data4
}