import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Combo Pack", "Renewal Pack", "Loyalty Pack", "Subscription Pack"],
  datasets: [
    {
      data: [8, 3, 6, 6, 7],
      backgroundColor: ["#db3545", "#fd7e14", "#ffc107", "#28a745", "#007bff"],
      hoverBackgroundColor: [
        "#db3545",
        "#fd7e14",
        "#ffc107",
        "#28a745",
        "#007bff",
      ],
    },
  ],
};

class PieExample extends React.Component {
  render() {
    return (
      <div>
        <Pie dataKey="value" width={600} height={400} data={data} />
      </div>
    );
  }
}

export default PieExample;
