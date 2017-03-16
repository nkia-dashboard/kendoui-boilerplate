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