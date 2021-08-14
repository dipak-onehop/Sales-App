import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Order Booked', 'Payment Recvd', 'Payment Pending'],
    datasets: [
        {
            label: '',
            backgroundColor: ['#db3545',
                '#28a745',
                '#007bff'],
            borderColor: ['#db3545',
                '#28a745',
                '#007bff'],
            borderWidth: 1,
            borderCapStyle: 'round',
            data: [65, 67, 70]
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
                    height={400}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default BarExample;