import React, { useState } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Button } from "reactstrap";

const data = {
  labels: [
    "Website",
    "Facebook",
    "Instagram",
    "India mart",
    "Just dial",
    "LinkedIn",
    "Referral",
  ],
  datasets: [
    {
      label: "Total leads",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      borderCapStyle: "round",
      data: [35, 40, 31, 14, 21, 28, 31],
      dataFor: 'leads'
    },
    {
      label: "Closed leads",
      backgroundColor: "rgb(215, 236, 251)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(215, 236, 251)",
      hoverBorderColor: "rgb(54, 162, 235)",
      data: [5, 6, 5, 2, 3, 3, 6],
      dataFor: 'leads'
    },
    {
      label: "Revenue",
      backgroundColor: "rgb(255, 219, 191)",
      borderColor: "rgb(253, 126, 20)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(255, 219, 191)",
      hoverBorderColor: "rgb(253, 126, 20)",
      data: [21500, 26000, 17000, 6500, 7000, 17000, 19000],
      dataFor: 'revenue'
    },
  ],
};

const BarExample = () => {
    const [activeData, setActiveData] = useState('leads');
    return (
      <div>
            <div className='mt-2'>
                    <Button color="primary ml-2" onClick={() => setActiveData('leads')}>Leads</Button>  
                    <Button color="info ml-2" onClick={() => setActiveData('revenue')}>Revenue</Button>
                </div>
        <HorizontalBar width={600} height={420} data={{...data, datasets: data.datasets.filter(item => item.dataFor === activeData)}} />
      </div>
    );
}

export default BarExample;
