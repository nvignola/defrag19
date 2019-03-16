import statement from "./statement";

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

const legend = [];

const year1 = [];
const year2 = [];
const year3 = [];
const year4 = [];

Object.keys(statement.data).forEach((k, index) => {
    legend.push({
        label: statement.data[k].name,
        color: SERIES_COLORS[index],
    });

    year1.push(statement.data[k].value1);
    year2.push(statement.data[k].value2);
    year3.push(statement.data[k].value3);
    year4.push(statement.data[k].value4);
});
console.log('>>', legend);
let series = [year1]
    .concat([year2])
    .concat([year3])
    .concat([year4]);

export default {
    data: {
        labels: ['2016', '2017', '2018', '2019'],
        series,
    },
    options: {
        axisY: {
            offset: 80,
            labelInterpolationFnc: function (value) {
                return value > 0 ? (value / 1000) + 'k/€' : value;
            },
            scaleMinSpace: 15,
        },
    },
    legend,
};
