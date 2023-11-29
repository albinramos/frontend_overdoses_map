import Plot from 'react-plotly.js';
import { useState } from 'react';

const types = ['scatter', 'bar'];
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'gray'];

const Chart = ({ title = "chart", data, multi = false, selectedYear }) => {
  const formatData = () => {
      const filteredData = data;
      const x = filteredData.map((item) => item["Month"])
      const y = filteredData.map((item) => item["Data Value"])
      const indicator = filteredData[0]["modo"]
      return [{
        x: x,
        y: y,
        type: type,
        mode: 'lines+markers',
        marker: { color: 'red' },
        
      }];
    }

  const [type, setType] = useState(types[0]);

  return (
    <section className="chart">
      <select onChange={(e) => setType(e.target.value)}>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <Plot
        data={formatData()}
        layout={{ width: 720, height: 440, title: title }}
      />
    </section>
  );
};

export default Chart;