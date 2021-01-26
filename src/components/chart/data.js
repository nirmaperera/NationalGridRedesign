const Cost = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, '#2B3AB0');
    gradient.addColorStop(1, 'rgba(182,189,221,0.1)');

    return {
        labels: [
            "1/25/18",
            "2/23/18",
            "3/26/18",
            "4/25/18",
            "5/25/18",
            "6/26/18",
            "7/26/18",
            "8/24/18",
            "9/25/18",
            "10/24/18",
            "11/26/18",
            "12/26/18",
            "1/25/19",
            "2/25/19",
            "3/26/19",
            "4/25/19",
            "5/28/19",
            "6/25/19",
            "7/26/19",
            "8/27/19",
            "9/25/19",
            "10/24/19",
            "11/22/19",
            "12/26/19",
            "1/27/20",
            "2/25/20",
            "3/26/20",
            "4/27/20",
            "5/27/20",
            "6/25/20",
            "7/27/20",
            "8/25/20",
            "9/23/20",
            "10/23/20",
            "11/23/20",
            "12/23/20"],

        datasets: [
            {
                label: 'Cost: $',
                data: [
                    84.02,
                    83.75,
                    85.40,
                    88.10,
                    77.89,
                    84.09,
                    66.43,
                    62.08,
                    69.86,
                    112.88,
                    269.64,
                    331.77,
                    398.16,
                    393.84,
                    316.46,
                    189.39,
                    155.73,
                    83.84,
                    53.65,
                    56.47,
                    69.92,
                    104.65,
                    175.26,
                    303.74,
                    318.62,
                    291.92,
                    266.97,
                    204.37,
                    125.07,
                    85.41,
                    72.63,
                    63.74,
                    80.70,
                    103.11,
                    173.08,
                    226.97,

                ],
                fill: 'start',
                backgroundColor: gradient,
                borderColor: '#0C0C7C',
                pointHoverRadius: 5,
            },

        ],
    }
}


const Meter = {
    labels: [
        "1/25/18",
        "2/23/18",
        "3/26/18",
        "4/25/18",
        "5/25/18",
        "6/26/18",
        "7/26/18",
        "8/24/18",
        "9/25/18",
        "10/24/18",
        "11/26/18",
        "12/26/18",
        "1/25/19",
        "2/25/19",
        "3/26/19",
        "4/25/19",
        "5/28/19",
        "6/25/19",
        "7/26/19",
        "8/27/19",
        "9/25/19",
        "10/24/19",
        "11/22/19",
        "12/26/19",
        "1/27/20",
        "2/25/20",
        "3/26/20",
        "4/27/20",
        "5/27/20",
        "6/25/20",
        "7/27/20",
        "8/25/20",
        "9/23/20",
        "10/23/20",
        "11/23/20",
        "12/23/20"],

    datasets: [
        {
            label: 'Meter Read',
            data: [
                2755,
                2790,
                2825,
                2861,
                2892,
                2926,
                2951,
                2976,
                3005,
                3061,
                3239,
                3447,
                3679,
                3916,
                4113,
                4211,
                4280,
                4311,
                4328,
                4347,
                4375,
                4421,
                4548,
                4790,
                5011,
                5224,
                5396,
                5559,
                5652,
                5688,
                5717,
                5742,
                5778,
                5823,
                5927,
                6092,
            ],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: '#3345D3',
            pointHoverRadius: 5,
        },

    ],
}


const Usage = {
    labels: [
        "1/25/18",
        "2/23/18",
        "3/26/18",
        "4/25/18",
        "5/25/18",
        "6/26/18",
        "7/26/18",
        "8/24/18",
        "9/25/18",
        "10/24/18",
        "11/26/18",
        "12/26/18",
        "1/25/19",
        "2/25/19",
        "3/26/19",
        "4/25/19",
        "5/28/19",
        "6/25/19",
        "7/26/19",
        "8/27/19",
        "9/25/19",
        "10/24/19",
        "11/22/19",
        "12/26/19",
        "1/27/20",
        "2/25/20",
        "3/26/20",
        "4/27/20",
        "5/27/20",
        "6/25/20",
        "7/27/20",
        "8/25/20",
        "9/23/20",
        "10/23/20",
        "11/23/20",
        "12/23/20"],

    datasets: [
        {
            label: 'Usage (CCF)',
            data: [
                37,
                35,
                35,
                36,
                31,
                34,
                25,
                25,
                29,
                56,
                178,
                208,
                232,
                237,
                197,
                98,
                69,
                31,
                17,
                19,
                28,
                46,
                127,
                242,
                221,
                213,
                172,
                163,
                93,
                36,
                29,
                25,
                36,
                45,
                104,
                165,
            ],
            fill: false,
            backgroundColor: '#0D0F7D',
            borderColor: '#00AFF0',
            yAxisID: 'y-axis-1',
            pointHoverRadius: 5,
        },

        {
            label: 'Usage (Therms)',
            data: [
                39,
                36,
                36,
                37,
                32,
                35,
                26,
                26,
                30,
                58,
                186,
                218,
                243,
                248,
                206,
                102,
                71,
                32,
                18,
                20,
                29,
                48,
                132,
                252,
                231,
                222,
                179,
                169,
                96,
                37,
                30,
                26,
                37,
                47,
                108,
                172,
            ],
            fill: false,
            backgroundColor: '#1A7007',
            borderColor: 'rgba(26,112,7, 0.5)',
            yAxisID: 'y-axis-2',
            pointHoverRadius: 5,
        },

    ],
}


const data = { Cost, Meter, Usage }
export default data;
