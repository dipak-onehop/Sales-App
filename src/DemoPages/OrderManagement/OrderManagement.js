import React, { Fragment } from "react";
import cx from "classnames";
import PageTitle from "../../Layout/AppMain/PageTitle";
import bg3 from "../../../src/assets/utils/images/dropdown-header/abstract3.jpg";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Table,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Button,
  ButtonGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
  Progress,
} from "reactstrap";
import { Loader, Types } from "react-loaders";
import CountUp from "react-countup";
import { orderMgtTblData } from "./ordermgdata";
const tblOrderData = [
  {
    date: "01/08/2021",
    invoiceNumber: "1211196",
    customerName: "dilshad shaikh",
    businessName: "Umiya Traders",
    productName: "Vivo V20",
    quantity: "1",
    totalAmount: "19500",
    paymentDone: "Yes",
  },
  {
    date: "01/08/2021",
    invoiceNumber: "1211197",
    customerName: "Aashish Patel",
    businessName: "Mahadev Electronics",
    productName: "Samsung Screen Guard",
    quantity: "1",
    totalAmount: "5000",
    paymentDone: "Yes",
  },
  {
    date: "02/08/2021",
    invoiceNumber: "1211198",
    customerName: "rakesh Jha",
    businessName: "LEVERE UNISEX SALON",
    productName: "Revolving Chair",
    quantity: "5",
    totalAmount: "20000",
    paymentDone: "Yes",
  },
  {
    date: "03/08/2021",
    invoiceNumber: "1211199",
    customerName: "Krishna Shah",
    businessName: "Krishna beauty zone",
    productName: "Lorial Shampoo",
    quantity: "100",
    totalAmount: "4000",
    paymentDone: "No",
  },
  {
    date: "03/08/2021",
    invoiceNumber: "1211200",
    customerName: "B. M Agrawal",
    businessName: "Bahu Rani Jewellers",
    productName: "Bosh Printer",
    quantity: "2",
    totalAmount: "30000",
    paymentDone: "Yes",
  },
  {
    date: "04/08/2021",
    invoiceNumber: "1211201",
    customerName: "Jinesh Gandhi",
    businessName: "Jin mobile",
    productName: "1 Plus Nord 128 GB",
    quantity: "10",
    totalAmount: "400000",
    paymentDone: "Yes",
  },
  {
    date: "04/08/2021",
    invoiceNumber: "1211202",
    customerName: "Abhishek Jain",
    businessName: "New Aabhushan Jewellers",
    productName: 'Mi 43" Smart LED TV',
    quantity: "2",
    totalAmount: "56000",
    paymentDone: "No",
  },
  {
    date: "05/08/2021",
    invoiceNumber: "1211203",
    customerName: "Parvesh khan",
    businessName: "Central Bakery",
    productName: "Hitachi 3 Ton AC",
    quantity: "1",
    totalAmount: "35000",
    paymentDone: "No",
  },
  {
    date: "09/08/2021",
    invoiceNumber: "1211204",
    customerName: "Anil Sharma",
    businessName: "Posh boutique",
    productName: "Crompton Classic Fans",
    quantity: "2",
    totalAmount: "10000",
    paymentDone: "Yes",
  },
  {
    date: "10/08/2021",
    invoiceNumber: "1211205",
    customerName: "Mohammad Salman",
    businessName: "Cut & Care Unisex Salon",
    productName: "HP laptop",
    quantity: "1",
    totalAmount: "5000",
    paymentDone: "Yes",
  },
];
function OrderManagement(props) {
  return (
    <Fragment>
      <PageTitle
        heading="Order Management"
        subheading="Add, Edit, Update or Check out any invoice generated  in detail till date"
        icon="pe-7s-diamond icon-gradient bg-tempting-azure"
      />
      <Row style={{ marginBottom: "20px" }} className="ml-0 d-flex justify-content-center">
        <div
          className="crm-dash-card-points"
          style={{ minWidth: "260px", width: "260px", marginLeft: "0" }}
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
                        Total Revenue
                      </div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-primary">
                        1,08,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
        {/* <Col md="6" xl="4">
          <div className="card mb-3 widget-content bg-happy-green">
            <div className="widget-content-wrapper text-white">
              <div className="widget-content-left">
                <div className="widget-heading">Total Revenue</div>
              </div>
              <div className="widget-content-right">
                <div className="widget-numbers text-white">1,08,000</div>
              </div>
            </div>
          </div>
        </Col> */}
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
                            Total invoice
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-success">154</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
        {/* <Col md="6" xl="4">
          <div className="card mb-3 widget-content bg-arielle-smile">
            <div className="widget-content-wrapper text-white">
              <div className="widget-content-left">
                <div className="widget-heading">Total invoice</div>
              </div>
              <div className="widget-content-right">
                <div className="widget-numbers text-white">154</div>
              </div>
            </div>
          </div>
        </Col> */}
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
                            Payment Pending
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-danger">34,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
        {/* <Col md="6" xl="4">
          <div className="card mb-3 widget-content bg-night-fade">
            <div className="widget-content-wrapper text-white">
              <div className="widget-content-left">
                <div className="widget-heading">Payment Pending</div>
              </div>
              <div className="widget-content-right">
                <div className="widget-numbers text-white">34,000</div>
              </div>
            </div>
          </div>
        </Col> */}
        </Row>
        <Row style={{ marginBottom: "20px" }}>
        <Col md="12" className="m-0 mt-3">
          <Card className="">
            <Row className="mt-4 ml-2 mb-4">
            <div className="d-flex mt-auto mb-auto ml-auto mr-4">
                  <Input
                    placeholder="Search"
                    className="mb-2"
                    style={{ fontSize: "14px" }}
                  />
                </div>
              <div
                className="d-flex justify-content-between ml-2"
                style={{ width: "97%" }}
              >
                <div className="d-flex lead-flter-wrapper">
                  <div className="d-flex flex-column">
                    <span>Status</span>
                    <UncontrolledButtonDropdown
                          className="mb-2 mr-2 UncontrolledButtonDropdown"
                          style={{ minWidth: "81px", marginTop: "7px" }}
                        >
                      <DropdownToggle
                        caret
                        outline
                        className="mb-2 mr-2 mt-1"
                        color="primary"
                      >
                        All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Payment Received</DropdownItem>
                        <DropdownItem>Payment Pending</DropdownItem>
                        <DropdownItem>Revert Sell</DropdownItem>                     
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Product Type</span>
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
                        Product Type
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Comobo Pack</DropdownItem>
                        <DropdownItem>Renewal Pack</DropdownItem>
                        <DropdownItem>SMS Pack</DropdownItem>
                        <DropdownItem>Loyalty Pack</DropdownItem>
                        <DropdownItem>Subscription Pack</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Sell Type</span>
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
                        <DropdownItem>Tax Invoice</DropdownItem>
                        <DropdownItem>Retail Invoice</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Payment Mode</span>
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
                        <DropdownItem>Cash</DropdownItem>
                        <DropdownItem>Cheque</DropdownItem>
                        <DropdownItem>Paytm</DropdownItem>
                        <DropdownItem>Online</DropdownItem>
                        <DropdownItem>NEFT/IMPS</DropdownItem>
                        <DropdownItem>Other</DropdownItem>r
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </div>
                <div
                className="d-flex justify-content-end ml-auto mb-auto mt-auto"
              >
                <Button
                  outline
                  className="mb-2 mr-2 btn-transition"
                  color="primary"
                >
                  Add Payment
                </Button>
                <Button
                  outline
                  className="mb-2 mr-2 btn-transition"
                  color="primary"
                >
                  {" "}
                  Create Invoice
                </Button>
              </div>
              </div>
            </Row>
            <Table className="mb-0" bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Invoice Number</th>
                  <th>Customer Name</th>
                  <th>Business Name</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Payment Done</th>
                </tr>
              </thead>
              <tbody>
                {orderMgtTblData.map((data) => (
                  <tr>
                    <td>{data.date}</td>
                    <td>{data.invoiceNumber}</td>
                    <td>{data.customerName}</td>
                    <td>{data.businessName}</td>
                    <td>{data.productName}</td>
                    <td>{data.quantity}</td>
                    <td>{data.totalAmount}</td>
                    <td>{data.paymentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default OrderManagement;
