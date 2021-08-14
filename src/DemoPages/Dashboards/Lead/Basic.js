import React, {Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody
} from 'reactstrap';

import ReactTable from "react-table";
import PageTitle from '../../../Layout/AppMain/PageTitle';

export default class DataTableBasic extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"Owner Name":"dilshad shaikh","Business Name":"Umiya Traders","Mobile":"7046158373","Sales Executive":"Chirag Dholariya","Email":"dilshadshaikh@gmail.com","City":"Ahmedabad","Lead Type":"Warm","Lead Source":"Website","Current Status":"Followup","Created Date":"12-03-2020 01:35 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Aashish Patel","Business Name":"Mahadev Electronics","Mobile":"9624890992","Sales Executive":"Krunal Patel","Email":"ashishpatel@gmail.com","City":"Mumbai","Lead Type":"Hot","Lead Source":"Website","Current Status":"New","Created Date":"25-07-2018 03:17 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"rakesh Jha","Business Name":"LEVERE UNISEX SALON","Mobile":"7874329308","Sales Executive":"Chirag Dholariya","Email":"rakeshjha@gmail.com","City":"Delhi","Lead Type":"Warm","Lead Source":"Referral","Current Status":"Followup","Created Date":"18-02-2020 01:30 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Krishna Shah","Business Name":"Krishna beauty zone","Mobile":"7041853241","Sales Executive":"Rajesh Sharma","Email":"krishna@beautyzone.com","City":"Chennai","Lead Type":"Warm","Lead Source":"Social Media","Current Status":"Followup","Created Date":"04-07-2019 12:10 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"B. M Agrawal","Business Name":"Bahu Rani Jewellers","Mobile":"9586490300","Sales Executive":"Nevil Patel","Email":"b.m@hotmail.com","City":"Surat","Lead Type":"Cold","Lead Source":"Social Media","Current Status":"New","Created Date":"06-04-2019 02:01 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Jinesh Gandhi","Business Name":"Jin mobile","Mobile":"7433033884","Sales Executive":"Monish Shah","Email":"jinesh.g@gmail.com","City":"Ahmedabad","Lead Type":"Hot","Lead Source":"Referral","Current Status":"New","Created Date":"17-07-2019 11:48 am","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Abhishek Jain","Business Name":"New Aabhushan Jewellers","Mobile":"9904466814","Sales Executive":"Nayan Patel","Email":"abhishekjain@gmail.com","City":"Pune","Lead Type":"Warm","Lead Source":"Referral","Current Status":"New","Created Date":"11-12-2020 04:04 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Parvesh khan","Business Name":"Central Bakery","Mobile":"7777991333","Sales Executive":"Mehtab Rathod","Email":"parveshkhan@gmail.com","City":"Jaipur","Lead Type":"Cold","Lead Source":"Social Media","Current Status":"New","Created Date":"18-07-2019 04:04 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Anil Sharma","Business Name":"De Ramas Multi Cuisine Restaurant","Mobile":"8980999666","Sales Executive":"Kaushal Kanani","Email":"anilsharma@gmail.com","City":"Mohali","Lead Type":"Warm","Lead Source":"Referral","Current Status":"Followup","Created Date":"13-04-2019 05:28 pm","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Mohammad Salman","Business Name":"Cut & Care Unisex Salon","Mobile":"9099662197","Sales Executive":"Chirag Dholariya","Email":"MohammadSalman@gmail.com","City":"Rajkot","Lead Type":"Hot","Lead Source":"Social Media","Current Status":"Followup","Created Date":"27-12-2019 10:57 am","Last Updated Date":"12-08-2021 05:35 am"},
                {"Owner Name":"Gautam Yadav","Business Name":"Posh boutique","Mobile":"9375980086","Sales Executive":"Jinal Rathod","Email":"gautam@gmail.com","City":"Lucknow","Lead Type":"Hot","Lead Source":"Website","Current Status":"Followup","Created Date":"16-04-2019 02:27 pm","Last Updated Date":"12-08-2021 05:35 am"}
            ]
        };
    }

    render() {
        const {data} = this.state;

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}
                    >
                    <div>
                        <PageTitle
                            heading="Data Tables"
                            subheading="Choose between regular React Bootstrap tables or advanced dynamic ones."
                            icon="pe-7s-medal icon-gradient bg-tempting-azure"
                        />
                    </div>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <ReactTable
                                        data={data}
                                        columns={[
                                            {
                                                Header: "Owner Name",
                                                accessor: "Owner Name"
                                            },
                                            {
                                                Header: "Business Name",
                                                accessor: "Business Name"
                                            },
                                            {
                                                Header: 'Mobile',
                                                accessor: 'Mobile'
                                            },
                                            {
                                                Header: 'Sales Executive',
                                                accessor: 'Sales Executive'
                                            },
                                            {
                                                Header: 'Email',
                                                accessor: 'Email'
                                            },
                                            {
                                                Header: 'City',
                                                accessor: 'City'
                                            },
                                            {
                                                Header: 'Lead Type',
                                                accessor: 'Lead Type'
                                            },
                                            {
                                                Header: 'Lead Source',
                                                accessor: 'Lead Source'
                                            },
                                            {
                                                Header: 'Current Status',
                                                accessor: 'Current Status'
                                            },
                                            {
                                                Header: 'Created Date',
                                                accessor: 'Created Date'
                                            },
                                            {
                                                Header: 'Last Updated Date',
                                                accessor: 'Last Updated Date'
                                            }
                                        ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}