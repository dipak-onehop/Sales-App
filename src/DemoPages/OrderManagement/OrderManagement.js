import React, { Fragment } from "react";
import PageTitle from "../../Layout/AppMain/PageTitle";
import {
  Row,
  Col,
  Input,
  Card,
  CardBody,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { orderMgtTblData } from "./ordermgdata";
import ReactTable from "react-table";
import "./OrderManagement.scss";
function OrderManagement(props) {
  return (
    <Fragment>
      <PageTitle
        heading="Order Management"
        subheading="Add, Edit, Update or Check out any invoice generated  in detail till date"
        icon="pe-7s-diamond icon-gradient bg-tempting-azure"
      />
      <Row
        style={{ marginBottom: "20px" }}
        className="ml-0 d-flex justify-content-center"
      >
        <Col md="6" lg="3">
          <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border-primary">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content">
                <div className="widget-title opacity-5 text-uppercase">
                  Total Revenue
                </div>
                <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                  <div className="widget-chart-flex align-items-center">
                    <div>1,08,000</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border-primary">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content">
                <div className="widget-title opacity-5 text-uppercase">
                  Total invoice
                </div>
                <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                  <div className="widget-chart-flex align-items-center">
                    <div>154</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border-primary">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content">
                <div className="widget-title opacity-5 text-uppercase">
                  Payment Pending
                </div>
                <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                  <div className="widget-chart-flex align-items-center">
                    <div>34000</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "20px" }}>
        <Col md="12" className="m-0 mt-3">
          <Card className="">
            <CardBody className="">
              <div className="d-flex table-flter-wrapper">
                <div className="d-flex ">
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
                <div className="table-search-input">
                  <Input
                    placeholder="Search"
                    className="mb-3"
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="d-flex justify-content-end ml-auto">
                  <Button
                    outline
                    className="mb-2 mr-2 btn-transition"
                    color="primary"
                  >
                    Add Payment
                  </Button>
                  <Button
                    outline
                    className="mb-2 btn-transition"
                    color="primary"
                  >
                    {" "}
                    Create Order
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="12">
          <Card className="order-managment-table-container">
            <ReactTable
              data={orderMgtTblData}
              columns={[
                {
                  Header: "Date",
                  accessor: "date",
                },
                {
                  Header: "Invoice Number",
                  accessor: "invoiceNumber",
                },
                {
                  Header: "Customer Name",
                  accessor: "customerName",
                },
                {
                  Header: "Business Name",
                  accessor: "businessName",
                },
                {
                  Header: "Product Name",
                  accessor: "productName",
                },
                {
                  Header: "Quantity",
                  accessor: "quantity",
                },
                {
                  Header: "Total Amount",
                  accessor: "totalAmount",
                },
                {
                  Header: "Payment Status",
                  accessor: "paymentStatus",
                },
              ]}
              defaultPageSize={10}
              className="custom-table"
            />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default OrderManagement;
