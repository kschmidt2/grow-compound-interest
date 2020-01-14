// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartId = document.getElementById("chart-container");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartId.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartId, {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1X5CqibtwzBH7JH7Klgqkl-BOBWj8mZHwXWfuBB88E2Y',
            startColumn: 5,
            endColumn: 7
        },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                format: '{value:.2f}'
            },
            tickAmount: 7,
            max: 1.5
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function() {
                let value = (this.y*1000000);
                return '$' + (value).toLocaleString(undefined,
                    {'minimumFractionDigits':0,'maximumFractionDigits':0});
            }
        },
        annotations: [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1,
                    y: 1.2
                },
                text: 'Starts at 25',
                useHTML: true,
                backgroundColor: 'white',
                align: 'left'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1,
                    y: 1
                },
                text: '$1,300,000',
                useHTML: true,
                backgroundColor: 'white',
                align: 'left',
                className: 'annotation-big-green'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1,
                    y: 0.85
                },
                text: 'Starts at 35',
                useHTML: true,
                backgroundColor: 'white',
                align: 'left'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1,
                    y: 0.65
                },
                text: '$565,000',
                useHTML: true,
                backgroundColor: 'white',
                align: 'left',
                className: 'annotation-big-gray'
            }],
        }],
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}