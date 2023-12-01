import { useState } from 'react'
import defaultData from './assets/csvjson.json'
import { getChartNames, getChartData } from './utils/data'
import Chart from './components/Chart'
import Button from './components/Button'
import Select from './components/Select'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [year, setYear] = useState('2022')
  const [charts, setCharts] = useState([])
  const chartNames = getChartNames(defaultData)

  const handleClick = (chartName, isActive) => {
    let chartNames = []

    if (isActive){
      chartNames = charts.concat(chartName)
    } else {
      chartNames = charts.filter((item) => item !== chartName)
    }

    setCharts(chartNames)
    filterData(chartNames)
  }
  
  const handleYear = (selectedYear) => {
    setYear(selectedYear);
    filterData(charts, selectedYear)
  }
  
  const filterData = (chartNames, selectedYear = year) => {
    const chartData = getChartData(chartNames, defaultData).filter((item) => {
      return item.Year === parseInt(selectedYear)
    })
  
    setData(chartData)
  }
  
  return (
    <>
      <h1>Overdoses Informations USA</h1>
      <div className='year-select'>
        <Select 
          name="year"
          options={['2015','2016','2018','2019','2020','2021','2022']}
          defaultOption={year}
          handleYear={handleYear}
        />
      </div>
      <div className='container'>
        <div className="container-dos">
    <div className='chart'>
      {chartNames.map((chartName,index) => (
        <Button
          key={`chart_${index}`}
          name={chartName}
          className="chart-button"
          handleClick={handleClick}
        />
      ))}
    </div>
    </div>
    <div className='char-data'>
      {data.length !== 0 &&
        <Chart
          data={data}
          title="Overdoses"
        />
      }
    </div>
    </div>
    </>
  );
}

export default App
