import { useState } from 'react';
import defaultData from './assets/csvjson.json';

import './App.css';
import { getIndicators, getIndicatorData } from './utils/data';
import Chart from './components/Chart';
import Button from './components/Button';
import Select from './components/Select';

const indicators = getIndicators(defaultData);

function App() {
  const [data, setData] = useState([])
  const [year, setYear] = useState('2022')
  const [selectedIndicator, setSelectedIndicator] = useState(undefined)
  const [selectedIndicators, setSelectedIndicators] = useState([])

  const handleClick = (indicator, isActive) => {
    setSelectedIndicator(indicator);
    filterData(indicator, isActive);
  };
  
  const handleYear = (selectedYear) => {
    setYear(selectedYear);
    filterData(selectedIndicator);
  }
  
  const filterData = (indicator, isActive) => {
    const newSelectedIndicators = [...selectedIndicators];
    let newData = data;

    if(isActive){
    if (newSelectedIndicators.includes(indicator)) {
      const indexToRemove = newSelectedIndicators.indexOf(indicator);
      newSelectedIndicators.splice(indexToRemove, 1);
      newData.splice(indexToRemove, 1);
    } else {
      newSelectedIndicators.push(indicator);
      const indicatorData = getIndicatorData(indicator, defaultData);
      newData = indicatorData;
    }
    } else{
      newData = [];
    }
  
    setSelectedIndicators(newSelectedIndicators);
  
    const filteredData = newData.filter((item) => {
      return item.Year === parseInt(year);
    });
  
    setData(filteredData);
  };
  
  console.log(data)
  return (
    <>
      <h1>Overdoses Informations USA</h1>
      <h2>Charts</h2>
      {indicators.map((indicator,index) => (
        <Button
          key={`${indicator}_${index}`}
          indicator={indicator}
          text={indicator}
          className={selectedIndicators.includes(indicator) ? "indicator selected" : "indicator"}
          handleClick={handleClick}
        />
      ))}
      <Select 
        name="year"
        options={['2015','2016','2018','2019','2020','2021','2022']}
        defaultOption={year}
        handleYear={handleYear}
      />
      {data.length !== 0 &&
        <Chart
          data={data}
          title="Overdoses"
          selectedYear={parseInt('2022')}
        
        />

      }
    </>
  );
}

export default App;