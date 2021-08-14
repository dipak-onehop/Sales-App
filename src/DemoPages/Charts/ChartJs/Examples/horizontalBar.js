import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Active',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            borderCapStyle: 'round',
            data: [65, 59, 80, 81, 56, 55, 42]
        },
        {
            label: 'Closed',
            backgroundColor: 'rgb(215, 236, 251)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(215, 236, 251)',
            hoverBorderColor: 'rgb(54, 162, 235)',
            data: [60, 70, 46, 71, 54, 50, 45]
          } 
    ]
};

class BarExample extends React.Component {

    render() {
        return (
            <div>
                <HorizontalBar width={600} height={420} data={data}/>
            </div>
        )
    }
}

export default BarExample;