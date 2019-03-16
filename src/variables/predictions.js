import statement from "./statement";

const year1 = [];
const year2 = [];
const year3 = [];
const year4 = [];

Object.keys(statement.data).forEach((k) => {
    year1.push(statement.data[k].value1);
    year2.push(statement.data[k].value2);
    year3.push(statement.data[k].value3);
    year4.push(statement.data[k].value4);
});

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
            scaleMinSpace: 15
        },
    },
};
