import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import data from '../chart/data';

import '../chart/Chart.scss';

const options = {
	scales: {
		xAxes: [
			{
				ticks: {
					fontSize: 8,
					display: false
				}
			}
		],

		yAxes: [
			{
				type: 'linear',
				display: true,
				position: 'left',
				id: 'y-axis-1',
				ticks: {
					fontColor: "#3345D3",
				}
			},
			{
				type: 'linear',
				display: true,
				position: 'right',
				id: 'y-axis-2',

			},

		],
	},
}

const Chart = () => {
	const dataNg = ['cost', 'meter', 'usage'];
	const [option, setOption] = useState("cost");
	const dataTemp = dataNg.map(dataTemp => dataTemp)

	return (
		<div className="chart">
			<div className="chart__header">
				<select value={option} onChange={((e) => setOption(e.target.value))}>
					{
						dataTemp.map((data, key) => <option key={key} value={data}>{data}</option>)
					}
				</select>
				<button className="chart__energyBtn">Energy Saving Tips</button>
			</div>

			{option === "cost" ?
				<Line data={data.Cost} id='canvas' options={options} /> :
				option === "meter" ?
					<Line data={data.Meter} options={options} /> :
					option === "usage" ?
						<Line data={data.Usage} options={options} /> : null}
		</div>
	)
}

export default Chart;
