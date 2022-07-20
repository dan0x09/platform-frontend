
export async function fetchTemperatureData() {
	const data = []
	for(let i = 0; i < 24; i++) {
		const x = i + 1, // hours
			y = Math.random() * 35 // temp C
		data.push([x, y])
	}

	return data
}