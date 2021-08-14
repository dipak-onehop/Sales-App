import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
    labels: [
        'New',
        'Contacted',
        'Interested',
        'Negotiation',
        'Closed'
    ],
    datasets: [{
        data: [100, 50, 100, 50, 20],
        backgroundColor: [
            '#db3545',
            '#fd7e14',
            '#ffc107',
            '#28a745',
            '#007bff',

        ],
        hoverBackgroundColor: [
            '#db3545',
            '#fd7e14',
            '#ffc107',
            '#28a745',
            '#007bff',
        ]
    }]
};

class DoughnutExample extends React.Component {

    render() {
        return (
            <div>
                <Doughnut width={600} height={450} data={data}/>
            </div>
        )
    }
}


export default DoughnutExample;
