import React, { Component, Fragment } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import FormDatePicker1 from "../../../Forms/Components/DatePicker/Examples/example1";
import HorizontalBarExample from "../../../Charts/ChartJs/Examples/horizontalBar";
import CalendarBasic from "../../../Components/Calendar/Examples/Basic";
import DoughnutExample from "../../../Charts/ChartJs/Examples/doughnut";
import PieExample from "../../../Charts/ChartJs/Examples/pie";
import Bar from "../../../Charts/ChartJs/Examples/bar";
import ColorBar from "../../../Charts/ApexCharts/Examples/Basic/Bar";
import closeicon from "../../../../assets/utils/images/closeicon.png";
import "./Variation.scss";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  Row,
  Col,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Progress,
  Table,
} from "reactstrap";

const Todays_Meeting = [
  {
    task: "Follow Up",
    account_lead_name: "Maruti Traders",
    owner: "Rutu Patel",
    created_on: "19th July 2021",
    deadline: "Today",
  },
  {
    task: "Payment Collection",
    account_lead_name: "ABJ Jewels",
    owner: "Rutu Patel",
    created_on: "27th July 2021",
    deadline: "This Week",
  },
  {
    task: "Follow Up",
    account_lead_name: "Knicks and Kicks Pvt Ltd",
    owner: "Rutu Patel",
    created_on: "28th July 2021",
    deadline: "Today",
  },
  {
    task: "Order Punching",
    account_lead_name: "Yesterday Orders- Internal",
    owner: "Rutu Patel",
    created_on: "28th July 2021",
    deadline: "This Week",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "JB Enterprise",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "15th August 2021",
  },
];
const Upcoming_Tasks = [
  {
    task: "Team Conference",
    account_lead_name: "Internal",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "Service Visit",
    account_lead_name: "Jewels and Glory",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "Service Visit",
    account_lead_name: "Arti Fashion",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "11th August 2021",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "ABC Creation",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "JB Enterprise",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "15th August 2021",
  },
];
const Upcoming_Appointments = [
  {
    task: "Service Visit",
    account_lead_name: "Jewels and Glory",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "Service Visit",
    account_lead_name: "Arti Fashion",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "11th August 2021",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "ABC Creation",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "JB Enterprise",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "15th August 2021",
  },
];
const Overdue_Tasks = [
  {
    task: "Service Visit",
    account_lead_name: "JJ Arts and Gallery",
    owner: "Rutu Patel",
    created_on: "19th July 2021",
    deadline: "27th July 2021",
  },
  {
    task: "Service Visit",
    account_lead_name: "Fashion Hub",
    owner: "Rutu Patel",
    created_on: "27th July 2021",
    deadline: "31st July 2021",
  },
];
const Untouched_Leads = [
  {
    task: "First Meeting Call",
    account_lead_name: "ABC Creation",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "First Meeting Call",
    account_lead_name: "JB Enterprise",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "15th August 2021",
  },
];
const New_Leads = [
  {
    task: "Introduction- New Lead",
    account_lead_name: "Nima Enterprises",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "Introduction- New Lead",
    account_lead_name: "Chetan Traders",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "15th August 2021",
  },
  {
    task: "Introduction- New Lead",
    account_lead_name: "Kunal Logistics",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
];
const Team_Meetings = [
  {
    task: "Team Conference",
    account_lead_name: "Internal",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "This Week",
  },
  {
    task: "Weekly Target Meeting",
    account_lead_name: "Internal",
    owner: "Rutu Patel",
    created_on: "Today",
    deadline: "Today",
  },
];

export default class CRMDashboard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: Todays_Meeting,
      active_button: "today_meetings",
    };
  }

  changeTableContent(type) {
    console.log("type", type);
    if (type == "today_meetings") {
      this.setState({ tableData: Todays_Meeting, active_button: type });
    }
    if (type == "upcoming_tasks") {
      this.setState({ tableData: Upcoming_Tasks, active_button: type });
    }
    if (type == "upcoming_appointments") {
      this.setState({ tableData: Upcoming_Appointments, active_button: type });
    }
    if (type == "overdue_tasks") {
      this.setState({ tableData: Overdue_Tasks, active_button: type });
    }
    if (type == "untouched_leads") {
      this.setState({ tableData: Untouched_Leads, active_button: type });
    }
    if (type == "new_leads") {
      this.setState({ tableData: New_Leads, active_button: type });
    }
    if (type == "team_meetings") {
      this.setState({ tableData: Team_Meetings, active_button: type });
    }
  }

  render() {
    const { active_button } = this.state;
    return (
      <Fragment>
        <Container fluid>
          <Row
            xl="12"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "15px",
            }}
          >
            {/* <Col
              md="5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "48%" }}>
                <CardTitle>Start Date</CardTitle>
                <FormDatePicker1 type={"start"} />
              </div>
              <div style={{ width: "48%" }}>
                <CardTitle>End Date</CardTitle>
                <FormDatePicker1 type={"end"} />
              </div>
            </Col> */}
            <UncontrolledButtonDropdown isOpen={this.state.isOpenFilter}>
              <DropdownToggle className="mb-2" color="link">
                <i
                  className="pe-7s-filter"
                  style={{ fontSize: "25px" }}
                  onClick={() => {
                    this.setState({
                      isOpenFilter: true,
                    });
                  }}
                >
                  {" "}
                </i>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-right dropdown-menu-rounded"
                style={{ width: "500px" }}
              >
                <div
                  id="PopUpHeader"
                  className="d-flex justify-content-between"
                  style={{
                    margin: "10px",
                    borderBottom: "1px solid lightgray",
                  }}
                >
                  <p className="header-title" style={{ fontSize: "16px" }}>
                    Filter
                  </p>
                  <img
                    alt="Close"
                    className="close-icon"
                    src={closeicon}
                    style={{ height: "19px" }}
                    onClick={() => {
                      this.setState({
                        isOpenFilter: false,
                      });
                    }}
                  />
                </div>
                <div className="dropdown-menu-header p-2">
                  <div className="dropdown-menu-header-inner d-flex">
                    <Row>
                      <Col xl="6" lg="6" sm="12" x="6">
                        <div>
                          <CardTitle>Start Date</CardTitle>
                          <FormDatePicker1 type={"start"} />
                        </div>
                      </Col>
                      <Col xl="6" lg="6" sm="12" x="6">
                        <div>
                          <CardTitle>End Date</CardTitle>
                          <FormDatePicker1
                            type={"end"}
                            popperPlacement="bottom-end"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-2">
                  <Button
                    size="md"
                    color="success"
                    style={{ fontSize: "16px", width: "105px" }}
                    onClick={() => {
                      this.setState({
                        isOpenFilter: false,
                      });
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <div
              className="crm-dash-card-points"
              style={{ minWidth: "225px", width: "225px", marginLeft: "0" }}
            >
              <ListGroup flush>
                <ListGroupItem>
                  <div className="widget-content p-0">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div
                            className="widget-heading"
                            style={{ marginBottom: "12px" }}
                          >
                            Total Leads
                          </div>
                          <div
                            className="widget-subheading"
                            style={{ marginBottom: "-6px" }}
                          >
                            Potential revenue
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-primary">200</div>
                          <div>11,25,000</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress
                          className="progress-bar-sm progress-bar-animated-alt"
                          color="primary"
                          value="80"
                        />
                        <div className="progress-sub-label">
                          <div className="sub-label-left">&nbsp;</div>
                          <div className="sub-label-right"> &nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
            <div
              className="crm-dash-card-points"
              style={{ minWidth: "238px", width: "238px" }}
            >
              <ListGroup flush>
                <ListGroupItem>
                  <div className="widget-content p-0">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div
                            className="widget-heading"
                            style={{ marginBottom: "12px" }}
                          >
                            High Potential Leads
                          </div>
                          <div
                            className="widget-subheading"
                            style={{ marginBottom: "-6px" }}
                          >
                            Potential revenue
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-danger">74</div>
                          <div>4,16,250</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress
                          className="progress-bar-sm progress-bar-animated-alt"
                          color="danger"
                          value="37"
                        />
                        <div className="progress-sub-label">
                          <div className="sub-label-left">
                            High Potential Leads %
                          </div>
                          <div className="sub-label-right">37%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
            <div
              className="crm-dash-card-points"
              style={{ minWidth: "210px", width: "210px" }}
            >
              <ListGroup flush>
                <ListGroupItem>
                  <div className="widget-content p-0">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div
                            className="widget-heading"
                            style={{ marginBottom: "12px" }}
                          >
                            Deals Won
                          </div>
                          <div
                            className="widget-subheading"
                            style={{ marginBottom: "-6px" }}
                          >
                            Orders Booked
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-success">30</div>
                          <div>1,14,000</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress
                          className="progress-bar-sm progress-bar-animated-alt"
                          color="success"
                          value="15"
                        />
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Deals Won %</div>
                          <div className="sub-label-right">15%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
            <div
              className="crm-dash-card-points"
              style={{ minWidth: "260px", width: "260px" }}
            >
              <ListGroup flush>
                <ListGroupItem>
                  <div className="widget-content p-0">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div
                            className="widget-heading"
                            style={{ marginBottom: "12px" }}
                          >
                            Total target
                          </div>
                          <div
                            className="widget-subheading"
                            style={{ marginBottom: "-6px" }}
                          >
                            Achievement
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-alternate">
                            5,00,000
                          </div>
                          <div>62,000</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress
                          className="progress-bar-sm progress-bar-animated-alt"
                          color="alternate"
                          value="12"
                        />
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Achievement %</div>
                          <div className="sub-label-right">12%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Row>
          {/* <Row style={{ display: "flex" }}>
            <Col md="6" xl="4">
              <ListGroup flush>
                <ListGroupItem>
                  <div className="widget-content p-0">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Success Ratio</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-info">27</div>
                          <br />
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress
                          className="progress-bar-sm progress-bar-animated-alt"
                          color="info"
                          value="43"
                        />
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Success Ratio %</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row> */}
          <br />
          <Row>
            <Col md="12" lg="6" xl="5">
              <Card style={{ marginBottom: "15px" }}>
                <CardHeader className="card-header-tab">
                  <div className="card-header-title">
                    <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                      {" "}
                    </i>
                    Lead Report chart by source
                  </div>
                </CardHeader>
                <HorizontalBarExample />
              </Card>

              <Card>
                <CardBody>
                  <CardTitle>Lead Report by Stage</CardTitle>
                  <DoughnutExample />
                </CardBody>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="7">
              <CardHeader className="card-header-tab">
                <div className="card-header-title">
                  <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                    {" "}
                  </i>
                  Monthly calendar and task
                </div>
              </CardHeader>
              <CalendarBasic />
            </Col>
          </Row>
          <Row className="mt-3">
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
                  <CardTitle>Payment Status</CardTitle>
                  <Bar />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="">
                <CardBody>
                  <CardTitle>Revenue by Product SKU</CardTitle>
                  <PieExample />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col md="12">
              <Card className="">
                <CardBody>
                  <CardTitle>Lead Source Vs Stage Report </CardTitle>
                  <ColorBar />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="12">
              <Card className="">
                <CardBody
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      marginop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    Important Tasks
                  </div>
                  <Button
                    outline={active_button !== "today_meetings"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("today_meetings")}
                    color="primary"
                  >
                    Todays Meetings
                  </Button>
                  <Button
                    outline={active_button !== "upcoming_tasks"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("upcoming_tasks")}
                    color="secondary"
                  >
                    Upcoming Tasks
                  </Button>
                  <Button
                    outline={active_button !== "upcoming_appointments"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) =>
                      this.changeTableContent("upcoming_appointments")
                    }
                    color="success"
                  >
                    Upcoming Appointments
                  </Button>
                  <Button
                    outline={active_button !== "overdue_tasks"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("overdue_tasks")}
                    color="info"
                  >
                    Overdue Tasks
                  </Button>
                  <Button
                    outline={active_button !== "untouched_leads"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("untouched_leads")}
                    color="warning"
                  >
                    Untouched Leads
                  </Button>
                  <Button
                    outline={active_button !== "new_leads"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("new_leads")}
                    color="primary"
                  >
                    New Leads Added
                  </Button>
                  <Button
                    outline={active_button !== "team_meetings"}
                    className="mr-2 btn-transition dashboard-btn-tbl"
                    onClick={(e) => this.changeTableContent("team_meetings")}
                    color="secondary"
                  >
                    Team Meetings
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
                    {this.state.tableData.map((data) => (
                      <tr>
                        <td>{data.task}</td>
                        <td>{data.account_lead_name}</td>
                        <td>{data.owner}</td>
                        <td>{data.created_on}</td>
                        <td>{data.deadline}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
