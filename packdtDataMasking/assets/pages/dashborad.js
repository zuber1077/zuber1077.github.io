
/*
 File: Morris init js
 */

!function($) {
    "use strict";

    var Dashboard = function() {};

    //creates line chart
    Dashboard.prototype.createLineChart = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },



        //Stacked bar chart

        new Chartist.Bar('#stacked-bar-chart', {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6',],
            series: [
                [800000, 1200000, 1400000, 1300000, 1520000, 1400000],
                [200000, 400000, 500000, 300000, 452000, 500000],
                [160000, 290000, 410000, 600000, 588000, 410000]
            ]
        }, {
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                },
                plugins: [
                    Chartist.plugins.tooltip()
                ]
            }).on('draw', function (data) {
                if (data.type === 'bar') {
                    data.element.attr({
                        style: 'stroke-width: 30px'
                    });
                }
            });
    //creates area chart
    Dashboard.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 2,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            resize: true,
            hideHover: 'auto',
            gridLineColor: '#eef0f2',
            lineColors: lineColors,
            lineWidth: 0,
            fillOpacity: 0.1,
            xLabelMargin: 10,
            yLabelMargin: 10,
            grid: false,
            axes: false,
            pointSize: 0
        });
    },

    //creates Donut chart
    Dashboard.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors
        });
    },
    
    Dashboard.prototype.init = function() {

        //create line chart
        var $data  = [
            { y: '2009', a: 0, b: 0, c: 0 },
            { y: '2010', a: 150,  b: 30, c: 50 },
            { y: '2011', a: 20,  b: 50, c: 150 },
            { y: '2012', a: 150,  b: 80, c: 40 },
            { y: '2013', a: 20,  b: 110, c: 150 },
            { y: '2014', a: 50,  b: 150, c: 40 },
            { y: '2015', a: 150, b: 170, c: 130 }
          ];
        this.createLineChart('multi-line-chart', $data, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#007BFF', '#00bcd2', '#e785da']);

        //creating area chart
        var $areaData = [
            {y: '2011', a: 10, b: 15},
            {y: '2012', a: 30, b: 35},
            {y: '2013', a: 10, b: 25},
            {y: '2014', a: 55, b: 45},
            {y: '2015', a: 30, b: 20},
            {y: '2016', a: 40, b: 35},
            {y: '2017', a: 10, b: 25},
            {y: '2018', a: 25, b: 30}
        ];
        this.createAreaChart('morris-area-chart', 0, 0, $areaData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#00c292', '#03a9f3']);

        //creating donut chart 2
        var $donutData = [
            {label: "USA", value: 12},
            {label: "Canada", value: 30},
            {label: "London", value: 20}
        ];
        this.createDonutChart('morris-donut-chart', $donutData, ['#40a4f1', '#5b6be8', '#c1c5e2']);
    },
    //init
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard.init();
}(window.jQuery);