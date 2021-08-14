import React, { Component, Fragment } from 'react';
import FormDatePicker1 from '../../../Forms/Components/DatePicker/Examples/example1'
import HorizontalBarExample from '../../../Charts/ChartJs/Examples/horizontalBar';
import CalendarBasic from '../../../Components/Calendar/Examples/Basic';
import DoughnutExample from '../../../Charts/ChartJs/Examples/doughnut';
import PieExample from '../../../Charts/ChartJs/Examples/pie';
import Bar from '../../../Charts/ChartJs/Examples/bar';
import ColorBar from '../../../Charts/ApexCharts/Examples/Basic/Bar';

import {
    Row, Col,
    Button,
    Container,
    ListGroup,
    ListGroupItem,
    Card, CardBody,
    CardTitle,
    CardHeader,
    Progress,
    Table,
} from 'reactstrap';

const Todays_Meeting = [
    {
        task: "Follow Up",
        account_lead_name: "Maruti Traders",
        owner: "Rutu Patel",
        created_on: "19th July 2021",
        deadline: "Today"
    },
    {
        task: "Payment Collection",
        account_lead_name: "ABJ Jewels",
        owner: "Rutu Patel",
        created_on: "27th July 2021",
        deadline: "This Week"
    },
    {
        task: "Follow Up",
        account_lead_name: "Knicks and Kicks Pvt Ltd",
        owner: "Rutu Patel",
        created_on: "28th July 2021",
        deadline: "Today"
    },
    {
        task: "Order Punching",
        account_lead_name: "Yesterday Orders- Internal",
        owner: "Rutu Patel",
        created_on: "28th July 2021",
        deadline: "This Week"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "JB Enterprise",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "15th August 2021"
    }
];
const Upcoming_Tasks = [
    {
        task: "Team Conference",
        account_lead_name: "Internal",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "Service Visit",
        account_lead_name: "Jewels and Glory",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "Service Visit",
        account_lead_name: "Arti Fashion",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "11th August 2021"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "ABC Creation",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "JB Enterprise",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "15th August 2021"
    }
];
const Upcoming_Appointments = [
    {
        task: "Service Visit",
        account_lead_name: "Jewels and Glory",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "Service Visit",
        account_lead_name: "Arti Fashion",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "11th August 2021"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "ABC Creation",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "JB Enterprise",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "15th August 2021"
    }
];
const Overdue_Tasks = [
    {
        task: "Service Visit",
        account_lead_name: "JJ Arts and Gallery",
        owner: "Rutu Patel",
        created_on: "19th July 2021",
        deadline: "27th July 2021"
    },
    {
        task: "Service Visit",
        account_lead_name: "Fashion Hub",
        owner: "Rutu Patel",
        created_on: "27th July 2021",
        deadline: "31st July 2021"
    }
];
const Untouched_Leads = [
    {
        task: "First Meeting Call",
        account_lead_name: "ABC Creation",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "First Meeting Call",
        account_lead_name: "JB Enterprise",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "15th August 2021"
    }
];
const New_Leads = [
    {
        task: "Introduction- New Lead",
        account_lead_name: "Nima Enterprises",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "Introduction- New Lead",
        account_lead_name: "Chetan Traders",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "15th August 2021"
    },
    {
        task: "Introduction- New Lead",
        account_lead_name: "Kunal Logistics",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    }
];
const Team_Meetings = [
    {
        task: "Team Conference",
        account_lead_name: "Internal",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "This Week"
    },
    {
        task: "Weekly Target Meeting",
        account_lead_name: "Internal",
        owner: "Rutu Patel",
        created_on: "Today",
        deadline: "Today"
    }
];

export default class CRMDashboard1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: Todays_Meeting,
            active_button: 'today_meetings'
        };
    }

    changeTableContent(type) {
        console.log('type',type)
        if(type == 'today_meetings'){
            this.setState({tableData:Todays_Meeting});
        }
        if(type == 'upcoming_tasks'){
            this.setState({tableData:Upcoming_Tasks});
        }
        if(type == 'upcoming_appointments'){
            this.setState({tableData:Upcoming_Appointments});
        }
        if(type == 'overdue_tasks'){
            this.setState({tableData:Overdue_Tasks});
        }
        if(type == 'untouched_leads'){
            this.setState({tableData:Untouched_Leads});
        }
        if(type == 'new_leads'){
            this.setState({tableData:New_Leads});
        }
        if(type == 'team_meetings'){
            this.setState({tableData:Team_Meetings});
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row xl="12" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                        <Col md="5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '48%' }} >
                                <CardTitle>Start Date</CardTitle>
                                <FormDatePicker1 type={'start'}/>
                            </div>
                            <div style={{ width: '48%' }}>
                                <CardTitle>End Date</CardTitle>
                                <FormDatePicker1 type={'end'}/>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col md="6" xl="4">
                            <ListGroup flush>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Active Leads
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Potential revenue
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-primary">
                                                        154
                                                    </div>
                                                    <div>
                                                        1,10,950
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="primary"
                                                    value="80" />
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">
                                                        Active Leads %
                                                    </div>
                                                    <div className="sub-label-right">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md="6" xl="4">
                            <ListGroup flush>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        High Potential Leads
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Potential revenue
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-danger">
                                                        74
                                                    </div>
                                                    <div>
                                                        40,950
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="danger"
                                                    value="40" />
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">
                                                        High Potential Leads %
                                                    </div>
                                                    <div className="sub-label-right">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md="6" xl="4">
                            <ListGroup flush>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Deals Won
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Orders Booked
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-success">
                                                        7
                                                    </div>
                                                    <div>
                                                        22,950
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="success"
                                                    value="43" />
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">
                                                        Deals Won %
                                                    </div>
                                                    <div className="sub-label-right">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex' }}>
                        <Col md="6" xl="4">
                            <ListGroup flush>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Success Ratio
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-info">
                                                        27
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="info"
                                                    value="43" />
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">
                                                        Success Ratio %
                                                    </div>
                                                    <div className="sub-label-right">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md="6" xl="4">
                            <ListGroup flush>
                                <ListGroupItem>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Total target
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Achievement
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-alternate">
                                                        1,50,000
                                                    </div>
                                                    <div>
                                                        20,950
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="alternate"
                                                    value="43" />
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">
                                                        Achievement %
                                                    </div>
                                                    <div className="sub-label-right">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md="12" lg="6" xl="5">
                            <Card style={{ marginBottom: '15px' }}>
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title">
                                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                        Lead Report By Source
                                    </div>
                                </CardHeader>
                                <HorizontalBarExample />
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        Lead Report by Stage
                                    </CardTitle>
                                    <DoughnutExample />
                                </CardBody>
                            </Card>

                        </Col>
                        <Col md="12" lg="6" xl="7">
                            <CardHeader className="card-header-tab">
                                <div className="card-header-title">
                                    <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                    Monthly Sales and Target Comparison
                                </div>
                            </CardHeader>
                            <CalendarBasic />
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col md="4">
                            <Card className="">
                                <CardBody>
                                    <CardTitle>
                                        Lead Report by Stage
                                    </CardTitle>
                                    <DoughnutExample />
                                </CardBody>
                            </Card>
                        </Col> */}
                        <Col md="6">
                            <Card className="">
                                <CardBody>
                                    <CardTitle>
                                        Payment Status
                                    </CardTitle>
                                    <Bar />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="">
                                <CardBody>
                                    <CardTitle>
                                        Revenue by Product SKU
                                    </CardTitle>
                                    <PieExample />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                        <Col md="12">
                            <Card className="">
                                <CardBody>
                                    <CardTitle>
                                        Revenue by Product SKU
                                    </CardTitle>
                                    <ColorBar />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md="12">
                            <Card className="">
                                <CardBody style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Important Tasks
                                    </div>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e => this.changeTableContent('today_meetings')}
                                        color="primary">Todays Meetings
                                    </Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('upcoming_tasks')}
                                        color="secondary">Upcoming Tasks
                                    </Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('upcoming_appointments')}
                                        color="success">Upcoming Appointments
                                    </Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('overdue_tasks')}
                                        color="info">Overdue Tasks
                                    </Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('untouched_leads')}
                                        color="warning">Untouched Leads</Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('new_leads')}
                                        color="primary">New Leads Added
                                    </Button>
                                    <Button outline className="mr-2 btn-transition"
                                        onClick={e =>this.changeTableContent('team_meetings')}
                                        color="secondary">Team Meetings
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12">
                        <Card className="">
                            <Table className="mb-0" bordered>
                                <thead>
                                    <tr>
                                        <th>Task</th>
                                        <th>Account/Lead Name</th>
                                        <th>Owner</th>
                                        <th>Created On</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.state.tableData.map(data =>
                                                <tr>
                                                    <td>{data.task}</td>
                                                    <td>{data.account_lead_name}</td>
                                                    <td>{data.owner}</td>
                                                    <td>{data.created_on}</td>
                                                    <td>{data.deadline}</td>
                                                </tr>
                                            )
                                        }
                                </tbody>
                            </Table>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
