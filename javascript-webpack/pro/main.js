$ = require("jquery");

require("@progress/kendo-ui/css/web/kendo.common.core.min.css");
require("@progress/kendo-ui/css/web/kendo.default.min.css");

require("@progress/kendo-ui/js/kendo.dropdownlist.js");
require("@progress/kendo-ui/js/kendo.all.js");
require("@progress/kendo-ui/js/kendo.dataviz.chart.js");

$("#sel").kendoDropDownList();

$("#chart").kendoChart({

    title: {
        text: "Kendo Chart Example"
    },
    legend: {
        position: "bottom"
    },
    series: [{
        name: "Temperature",
        data: [20, 25, 32],
        axis: "temperature"
    }, {
        name: "Humidity",
        data: [45, 50, 80],
        axis: "humidity"
    }],
    categoryAxis: {
        categories: ["Aug", "Sep", "Oct"]
    },
    valueAxis: [{
        name: "temperature",
        title: {
            text: "Temperature, Celsius"
        },
        plotBands: [{
            from: 30,
            to: 40,
            color: "#f99"
        }]
    }, {
        name: "humidity",
        title: {
            text: "Relative Humidity"
        }
    }]

});

$("#datePicker").kendoDatePicker({
    value: new Date(),
    min: new Date(1950, 0, 1),
    max: new Date(2049, 11, 31)
})


$("#lineChart").kendoChart({
    title: {
        text: "Internet Users"
    },
    legend: {
        position: "bottom"
    },
    seriesDefaults: {
        type: "line"
    },
    series: [{
        name: "World",
        data: [15.7, 16.7, 20, 23.5, 26.6]
    }, {
        name: "United States",
        data: [67.96, 68.93, 75, 74, 78]
    }],
    valueAxis: {
        labels: {
            format: "{0}%"
        }
    },
    categoryAxis: {
        categories: [2005, 2006, 2007, 2008, 2009]
    }
});