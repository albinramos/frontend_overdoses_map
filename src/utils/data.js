const getChartNames = (data) => {
	const chartNames = data.map((item) => item.Indicator)
	const uniqueChartNames = [...new Set(chartNames)]

	return uniqueChartNames.sort()
}

const getChartData = (chartNames, data) => {
	return data.filter((item) => { return chartNames.includes(item.Indicator) })
}

export  {
    getChartNames,
    getChartData
}
