import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import data from '../chart/data';

import '../chart/Chart.css';

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
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

    const [dataNg, setDataNg] = useState(["cost", "meter", "usage"])
    const [option, setOption] = useState("cost");
    const dataTemp = dataNg.map(dataTemp => dataTemp)


    return (
        <div className="chart">
            <select value={option} onChange={((e) => setOption(e.target.value))}>
                {
                    dataTemp.map((data, key) => <option value={data}>{data}</option>)
                }
            </select>

            {option === "cost" ?
                <Line data={data.cost} /> :
                option === "meter" ?
                    <Line data={data.meter} options={options} /> :
                    option === "usage" ?
                        <Line data={data.usage} options={options} /> : null}

        </div>
    )

}

export default Chart;