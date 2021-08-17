import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Leads",
          data: [6, 8, 6, 2, 4, 7, 7],
        },
        {
          name: "Contacted Leads",
          data: [7, 9, 9, 2, 4, 5, 3],
        },
        {
          name: "Interested",
          data: [10, 7, 2, 4, 5, 7, 5],
        },
        {
          name: "Negotiation",
          data: [3, 6, 5, 1, 3, 3, 5],
        },
        {
          name: "Closed lead",
          data: [5, 6, 5, 2, 3, 3, 6],
        },
        {
          name: "Not Interested",
          data: [4, 4, 4, 3, 2, 3, 5],
        },
      ],
      options: {
        chart: {
          type: "bar",
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
          colors: ["#fff"],
        },
        xaxis: {
          categories: [
            "Website",
            "Facebook",
            "Indtagram",
            "Indiamart",
            "Justdial",
            "Linkedin",
            "Referral",
          ],
          labels: {
            formatter: function(val) {
              return val + "K";
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default Bar;
