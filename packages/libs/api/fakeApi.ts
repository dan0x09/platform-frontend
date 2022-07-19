
export async function fetchTemperatureData() {
	const data = []
	for(let i = 0; i < 100; i++) {
		const x = Math.random() * 24, //hours
			y = Math.random() * 35	  //temp C
		data.push([x, y])
	}
	
	return data
}