const getIndicators = (data) => {
    const indicators = data.map((item) => item.Indicator);
    const uniqueIndicators = [...new Set(indicators)];
    return uniqueIndicators.sort();
}

const getIndicatorData = (indicator, data) => {
    return data.filter((item) => {
        return item.Indicator === indicator;
    });
}


export  {
    getIndicators,
    getIndicatorData
}