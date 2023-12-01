import Plot from 'react-plotly.js'
import { useState } from 'react'

const types = ['bar']
const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'black',
  'white',
  'gray',
  'brown',
  'cyan',
]

const Chart = ({ title = "chart", data }) => {
  const [type, setType] = useState(types[0])

  const formatData = () => {
    const sanitizedData = data.filter((item) => item['Data Value'] !== '')
    sanitizedData.forEach((item) => {
      if (typeof(item['Data Value']) === 'string') {
        item['Data Value'] = parseInt(item['Data Value'].split(',').join(''))
      }
      //console.log(item)
    })
    const groupedData = Object.groupBy(sanitizedData, ({ Indicator }) => Indicator)
    const dataEntries = Object.keys(groupedData).map((item, index) =>
      Object.values(groupedData)[index]
    ) 

    return dataEntries.map((dataset, index) => {
        const x = dataset.map((item) => item['Month'])
        const y = dataset.map((item) => item['Data Value'])

      return {
        x: x,
        y: y,
        type: type,
        mode: 'lines+markers',
        marker: { color: colors[index] },
        name: dataset[0]['Indicator']
      }
    })
  }

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
  )
}

export default Chart
