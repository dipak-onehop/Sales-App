import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["New", "Contacted", "Interested", "Negotiation", "Closed Lead","Not Interested"],
  datasets: [
    {
      data: [40, 39, 40, 26,30, 25],
      backgroundColor: ["#db3545", "#fd7e14", "#ffc107", "#28a745", "#007bff","#hj7e14"],
      hoverBackgroundColor: [
        "#db3545",
        "#fd7e14",
        "#ffc107",
        "#28a745",
        "#007bff",
        "#hj7e14"
      ],
    },
  ],
};

class DoughnutExample extends React.Component {
  render() {
    return (
      <div>
        <Doughnut width={600} height={450} data={data} />
      </div>
    );
  }
}

export default DoughnutExample;
