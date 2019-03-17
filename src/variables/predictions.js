const SERIES_COLORS = [
    '#1DC7EA',
    '#FB404B',
    '#FFA534',
    '#9368E9',
    '#87CB16',
    '#1b8dff',
    '#5e5e5e',
    '#dd4b39',
    '#35465c',
    '#e52d27',
    '#55acee',
    '#cc2127',
    '#1769ff',
    '#6188e2',
    '#a748ca',
];

const options = {
    axisY: {
        offset: 80,
        labelInterpolationFnc: function (value) {
            return value > 0 ? (value / 1000) + 'k/€' : value;
        },
        scaleMinSpace: 15,
    },
};

export const actualState = {
    legend: [
        { label: 'Total assets', color: SERIES_COLORS[0], },
        { label: 'Other reserves', color: SERIES_COLORS[1], },
    ],
    data: {
        labels: ['2016', '2017'],
        series: [
            [ 19048, 23483 ],
            [ 4032, 14953 ],
        ],
    },
    options,
}

export default (statementsData) => {
    const legend = [];
    const year1 = [];
    const year2 = [];
    const year3 = [];
    const year4 = [];

    Object.keys(statementsData).forEach((k, index) => {
        legend.push({
            label: statementsData[k].name,
            color: SERIES_COLORS[index],
        });

        year1.push(statementsData[k].value1);
        year2.push(statementsData[k].value2);
        year3.push(statementsData[k].value3);
        year4.push(statementsData[k].value4);
    });

    let series = [year1]
        .concat([year2])
        .concat([year3])
        .concat([year4]);

    return {
        data: {
            labels: ['2016', '2017', '2018', '2019'],
            series,
        },
        smallData: {
            labels: ['2016', '2017', '2018'],
            series,
        },
        options,
        legend,
    };
};
