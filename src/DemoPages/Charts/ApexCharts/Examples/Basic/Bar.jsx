import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class Bar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'New Leads',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Contacted Leads',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Interested',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Negotiation',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Deal Closed',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Website', 'Facebook', 'Indtagram', 'Indiamart', 'Justdial', 'Linkedin', 'Referral'],
                    labels: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
}

export default Bar;
