import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Order Booked', 'Payment Recvd', 'Payment Pending'],
    datasets: [
        {
            label: '',
            backgroundColor: ['#db3545','#28a745','#007bff'],
            borderColor: ['#db3545','#28a745','#007bff'],
            borderWidth: 1,
            borderCapStyle: 'round',
            data: [114000, 62000, 52000]
        }
    ]
};

class BarExample extends React.Component {

    render() {
        return (
            <div>
                <Bar
                    data={data}
                    width={600}
                    height={550}
                    legend={false}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                barPercentage: 0.4
                            }],
                            yAxes: [{
                              ticks: {
                                beginAtZero: true
                              }
                            }]
                          }
                    }}
                />
            </div>
        )
    }
}

export default BarExample;