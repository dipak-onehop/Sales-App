import React, { Component, Fragment } from "react";
import moment from "moment";
import Tooltip from "rc-tooltip";
import "./LeadManagement.scss";
import {
  Row,
  Col,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  Input,
  CardBody,
  CardTitle,
  CardHeader,
  Progress,
  Table,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
} from "reactstrap";
import {
  Container as FloatContainer,
  Button as FloatButton,
} from "react-floating-action-button";

import WhatsApp from "../../../src/assets/utils/images/WhatsApp.png";
import Facebook from "../../../src/assets/utils/images/facebook.png";
import Insta from "../../../src/assets/utils/images/instagram.png";
import {
  faCalendarAlt,
  faUpload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
// import Insta from "../../../src/assets/utils/images/export_icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";
import PageTitle from "../../Layout/AppMain/PageTitle";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import { leadTableData } from "./leaddata";
import AddEditLead from "./AddEditLead/AddEditLead";
import { connect } from "react-redux";
import ReactTable from "react-table";

class LeadManagement extends Component {
  constructor(props) {
    super(props);
    const data = leadTableData.filter((x) => x.currentStatus === "New");
    this.state = {
      tableData: data,
      activeButton: "allLeads",
      startDate: null,
      endDate: null,
      leadTableDataLength: {
        allLeadsData: 0,
        newLeadsData: 0,
        InterestedData: 0,
        NegotiationData: 0,
        ClosedData: 0,
        contracted: 0,
      },
      isOpen: false,
    };
    this.state.leadTableDataLength.allLeadsData = leadTableData.length;
    this.state.leadTableDataLength.newLeadsData = leadTableData.filter(
      (x) => x.currentStatus === "New"
    ).length;
    this.state.leadTableDataLength.InterestedData = leadTableData.filter(
      (x) => x.currentStatus === "Interested"
    ).length;
    this.state.leadTableDataLength.NegotiationData = leadTableData.filter(
      (x) => x.currentStatus === "Negotiation"
    ).length;
    this.state.leadTableDataLength.ClosedData = leadTableData.filter(
      (x) => x.currentStatus === "Close Lead"
    ).length;
    this.state.leadTableDataLength.contracted = leadTableData.filter(
      (x) => x.currentStatus === "Contacted"
    ).length;
  }

  // Function to handle Add lead button click
  hanldeAddLeadClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // Function to handle final submit of Add new link
  handlePrimaryButtonClickInAddLead = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    // uncomment if required 
    // if (startDate.isAfter(endDate)) {
    //   endDate = startDate;
    // }

    this.setState({ startDate, endDate });
  };

  handleChangeStart = (startDate) => this.handleChange({ startDate });

  handleChangeEnd = (endDate) => this.handleChange({ endDate });

  changeTableContent(type) {
    console.log("type", type);
    if (type === "allLeads") {
      this.setState({ tableData: leadTableData, activeButton: type });
    }
    if (type === "newLeads") {
      const data = leadTableData.filter((x) => x.currentStatus === "New");
      this.setState({ tableData: data, activeButton: type });
    }
    if (type === "contactedLeads") {
      const data = leadTableData.filter((x) => x.currentStatus === "Contacted");
      this.setState({ tableData: data, activeButton: type });
    }
    if (type === "interestedLeads") {
      const data = leadTableData.filter(
        (x) => x.currentStatus === "Interested"
      );
      this.setState({ tableData: data, activeButton: type });
    }
    if (type === "negotiationLeads") {
      const data = leadTableData.filter(
        (x) => x.currentStatus === "Negotiation"
      );
      this.setState({ tableData: data, activeButton: type });
    }
    if (type === "closedLeads") {
      const data = leadTableData.filter(
        (x) => x.currentStatus === "Close Lead"
      );
      this.setState({ tableData: data, activeButton: type });
    }
  }

  openCloseFloat = (i) => {
    let { tableData } = this.state;
    tableData[i].isOpen = !tableData[i].isOpen;
    this.setState({ tableData });
  };

  // Function which return action item for table
  displayActionItems = (props) => {
    const { index } = props;
    const row = this.state.tableData[index];
    return (
      <div className="action-button">
        <FloatingMenu
          slideSpeed={500}
          direction="left"
          spacing={8}
          isOpen={row.isOpen !== undefined && row.isOpen}
        >
          <MainButton
            backgroundColor="black"
            onClick={() => this.openCloseFloat(index)}
            size={30}
            className={row.isOpen ? "float-close-btn" : "float-share-btn"}
          />
          {
            <ChildButton
              background="white"
              className="whatsapp-float"
              size={25}
            />
          }
          <ChildButton background="white" className="email-float" size={25} />
          <ChildButton background="white" className="sms-float" size={25} />
          <ChildButton background="white" className="call-float" size={25} />
        </FloatingMenu>
      </div>
    );
  };
  render() {
    const { activeButton, leadTableDataLength } = this.state;
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col xl="4" md="12" sm="12">
              <PageTitle
                heading="Lead Management"
                // subheading="Add, Edit, Update or Check out any invoice generated  in detail till date"
                icon="pe-7s-display2 icon-gradient bg-tempting-azure"
              />
            </Col>
            <Col xl="8" md="12" sm="12">
              <div className="d-flex lead-tbl-buttons">
                <Button
                  outline={activeButton !== "allLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("allLeads")}
                  color="primary"
                >
                  All Leads-{leadTableDataLength.allLeadsData}
                </Button>
                <Button
                  outline={activeButton !== "newLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("newLeads")}
                  color="secondary"
                >
                  New Leads-{leadTableDataLength.newLeadsData}
                </Button>
                <Button
                  outline={activeButton !== "contactedLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("contactedLeads")}
                  color="info"
                >
                  Contacted Leads-{leadTableDataLength.contracted}
                </Button>
                <Button
                  outline={activeButton !== "interestedLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("interestedLeads")}
                  color="secondary"
                >
                  Interested Leads-{leadTableDataLength.InterestedData}
                </Button>
                <Button
                  outline={activeButton !== "negotiationLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("negotiationLeads")}
                  color="success"
                >
                  Negotiation Leads-{leadTableDataLength.NegotiationData}
                </Button>
                <Button
                  outline={activeButton !== "closedLeads"}
                  className="mr-2 btn-transition"
                  onClick={(e) => this.changeTableContent("closedLeads")}
                  color="info"
                >
                  Closed Leads-{leadTableDataLength.ClosedData}
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="">
                <CardBody style={{ display: "flex", flexDirection: "column" }}>
                  <div className="d-flex table-flter-wrapper">
                    <div className="d-flex">
                      <div className="d-flex flex-column">
                        <span>City wise</span>
                        <UncontrolledButtonDropdown
                          className="mb-2 mr-2 UncontrolledButtonDropdown"
                          style={{ minWidth: "81px", marginTop: "10px" }}
                        >
                          <DropdownToggle
                            caret
                            outline
                            className="mb-2 mr-2"
                            color="primary"
                          >
                            All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>All</DropdownItem>
                            {this.props.cities.map((city) => (
                              <DropdownItem>{city.name}</DropdownItem>
                            ))}
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                      <div className="d-flex flex-column">
                        <span>Source wise</span>
                        <UncontrolledButtonDropdown
                          className="mb-2 mr-2 UncontrolledButtonDropdown"
                          style={{ minWidth: "81px", marginTop: "10px" }}
                        >
                          <DropdownToggle
                            caret
                            outline
                            className="mb-2 mr-2"
                            color="primary"
                          >
                            All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Website</DropdownItem>
                            <DropdownItem>Facebook</DropdownItem>
                            <DropdownItem>Instagram</DropdownItem>
                            <DropdownItem>India mart</DropdownItem>
                            <DropdownItem>Just dial</DropdownItem>
                            <DropdownItem>LinkedIn</DropdownItem>
                            <DropdownItem>Referral</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                      <div
                        className="d-flex flex-column"
                        style={{ width: "150px" }}
                      >
                        <FormGroup>
                          <Label for="exampleEmail" className="mr-sm-2">
                            Start Date
                          </Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <div className="input-group-text">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                              </div>
                            </InputGroupAddon>
                            <DatePicker
                              selected={this.state.startDate}
                              selectsStart
                              className="form-control"
                              startDate={this.state.startDate}
                              endDate={this.state.endDate}
                              onChange={this.handleChangeStart}
                              placeholderText="Start date"
                              style={{ fontSize: "14px" }}
                              popperPlacement="bottom"
                            />
                          </InputGroup>
                        </FormGroup>
                      </div>
                      <div
                        className="d-flex flex-column ml-2"
                        style={{ width: "150px" }}
                      >
                        <FormGroup>
                          <Label for="exampleEmail" className="mr-sm-2">
                            End Date
                          </Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <div className="input-group-text">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                              </div>
                            </InputGroupAddon>
                            <DatePicker
                              selected={this.state.endDate}
                              selectsStart
                              className="form-control"
                              startDate={this.state.endDate}
                              endDate={this.state.endDate}
                              onChange={this.handleChangeEnd}
                              placeholderText="Start date"
                              style={{ fontSize: "14px" }}
                              popperPlacement={"bottom-end"}
                            />
                          </InputGroup>
                        </FormGroup>
                      </div>
                    </div>
                    <div
                      className="table-search-input"
                    >
                      <Input
                        placeholder="Search"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-end ml-auto">
                      <Button
                        outline
                        className="mb-2 mr-2 btn-transition mt-auto mb-auto mr-3"
                        color="primary"
                        onClick={this.hanldeAddLeadClick}
                      >
                        Add Lead
                      </Button>
                      <div
                        className="import-export-icon-lead"
                        style={{ cursor: "pointer" }}
                      >
                        <Tooltip
                          placement="top"
                          trigger={["hover"]}
                          overlay={<span>Import</span>}
                        >
                          {/* <i className="pe-7s-upload" style={{fontSize: "30px",fontWeight: 'bold'}}> </i> */}
                          <FontAwesomeIcon
                            style={{ fontSize: "20px" }}
                            icon={faUpload}
                          />
                        </Tooltip>
                      </div>
                      <div
                        className="import-export-icon-lead"
                        style={{ cursor: "pointer" }}
                      >
                        <Tooltip
                          placement="top"
                          trigger={["hover"]}
                          overlay={<span>Export</span>}
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: "20px" }}
                            icon={faDownload}
                          />
                          {/* <i className="pe-7s-download" style={{fontSize: "30px",fontWeight: 'bold'}}> </i> */}
                          {/* <img src=""/> */}
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="lead-managment-table-container">
                {console.log("this.state.tableData", this.state.tableData)}
                <ReactTable
                  data={this.state.tableData}
                  columns={[
                    {
                      Header: "Owner Name",
                      accessor: "ownerName",
                    },
                    {
                      Header: "Business Name",
                      accessor: "businessName",
                    },
                    {
                      Header: "Mobile",
                      accessor: "mobile",
                    },
                    {
                      Header: "Sales Executive",
                      accessor: "salesExecutive",
                    },
                    {
                      Header: "Email",
                      accessor: "email",
                    },
                    {
                      Header: "City",
                      accessor: "city",
                    },
                    {
                      Header: "Lead Type",
                      accessor: "leadType",
                    },
                    {
                      Header: "Lead Source",
                      accessor: "leadSource",
                    },
                    {
                      Header: "Current Status",
                      accessor: "currentStatus",
                    },
                    {
                      Header: "Created Date",
                      accessor: "createdDate",
                    },
                    {
                      Header: "Last Updated Date",
                      accessor: "updatedDate",
                    },
                    // https://github.com/tannerlinsley/react-table/issues/1689
                    {
                      Header: "Actions",
                      Cell: (props) => this.displayActionItems(props),
                      sortable: false,
                      width: 70,
                    },
                  ]}
                  defaultPageSize={10}
                  className="custom-table"
                />
              </Card>
            </Col>
          </Row>
        </Container>
        <AddEditLead
          toggle={this.hanldeAddLeadClick}
          handlePrimaryButtonClick={this.handlePrimaryButtonClickInAddLead}
          isOpen={this.state.isOpen}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.CommonOptions.cities,
});

export default connect(mapStateToProps, null)(LeadManagement);
