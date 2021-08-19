import React, { Fragment, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardBody,
  Container,
  FormFeedback,
} from "reactstrap";
import { validateContact, validateEmail } from "../../../utils/utils";
import CustomSlide from "../../Components/CustomSlide";

const AddEditLead = (props) => {
  const { toggle } = props;
  const requiredFeilds = ["businessName", "phoneNumber", "status", "source"];
  const cities = useSelector((state) => state.CommonOptions.cities);
  const [leadDetails, setLeadDetails] = useState({
    id: "", // at the time of edit lead
    businessName: "",
    businessNameError: "",
    customerName: "",
    phoneNumber: "",
    phoneNumberError: "",
    whatsappNumber: "",
    whatsappNumberError: "",
    email: "",
    emailError: "",
    address: "",
    city: "",
    pincode: "",
    industry: "",
    status: "",
    statusError: "",
    source: "",
    sourceError: "",
    remark: "",
  });
  const [statusArray] = useState([
    { id: 1, label: "New" },
    { id: 2, label: "Contacted" },
    { id: 3, label: "Interested" },
    { id: 4, label: "Negotiation" },
    { id: 5, label: "Closed" },
    { id: 6, label: "Not Interested" },
  ]);
  const [sourceArray] = useState([
    { id: 1, label: "Website" },
    { id: 2, label: "FB" },
    { id: 3, label: "Instagram" },
    { id: 4, label: "Indiamart" },
    { id: 5, label: "Justdial" },
    { id: 6, label: "Linkedin" },
    { id: 7, label: "Referral" },
  ]);

  const validateData = (name, value) => {
    let isError = false;
    setLeadDetails((previouse) => {
      // check if required feild
      if (requiredFeilds.includes(name)) {
        // but value not added then show feild is required error message
        if (!value) {
          previouse[`${name}Error`] = `This feild is required`;
          isError = true;
        }
        // if phone number and value added then check phone number validation
        else if (name === "phoneNumber" && value) {
          const isValidPhone = validateContact(value);
          if (!isValidPhone) {
            previouse[`${name}Error`] = `Please enter valid phone number`;
            isError = true;
          } else {
            previouse[`${name}Error`] = "";
          }
        } else {
          previouse[`${name}Error`] = "";
        }
      }
      // if email and value added then check email validation
      else if (name === "email" && value) {
        const isValidEmail = validateEmail(value);
        if (!isValidEmail) {
          previouse[`${name}Error`] = `Please enter valid email`;
          isError = true;
        } else {
          previouse[`${name}Error`] = "";
        }
      }
      // if whatsapp number and value added then check whatsapp number validation
      else if (name === "whatsappNumber") {
        if (!value) {
          previouse[`${name}Error`] = "";
        } else {
          const isValidPhone = validateContact(value);
          if (!isValidPhone) {
            previouse[`${name}Error`] = `Please enter valid whatsapp number`;
            isError = true;
          } else {
            previouse[`${name}Error`] = "";
          }
        }
      }

      return {
        ...previouse,
      };
    });
    return isError;
  };

  const handleValueChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    validateData(name, value);
    setLeadDetails((previouse) => {
      return {
        ...previouse,
        [name]: value,
      };
    });
  };

  const handlePrimaryButtonClick = () => {
    let isAnyError = false;
    Object.keys(leadDetails).forEach(async (leadItem) => {
      isAnyError = await validateData(leadItem, leadDetails[leadItem]);
    });
    if (isAnyError) return;
    // handle api call on click of submit screen
  };

  return (
    <CustomSlide title="Add lead" {...props}>
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Container fluid>
            <Row>
              <Col md="12">
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="businessName">Business Name*</Label>
                      <Input
                        type="text"
                        name="businessName"
                        id="businessName"
                        onChange={handleValueChange}
                        value={leadDetails.businessName}
                        invalid={!!leadDetails.businessNameError}
                      />
                      <FormFeedback invalid>
                        {leadDetails.businessNameError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="customerName">Customer / Owner Name</Label>
                      <Input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={leadDetails.customerName}
                        onChange={handleValueChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phoneNumber">Phone number*</Label>
                      <Input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={leadDetails.phoneNumber}
                        onChange={handleValueChange}
                        invalid={!!leadDetails.phoneNumberError}
                      />
                      <FormFeedback invalid>
                        {leadDetails.phoneNumberError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="whatsappNumber">Whatsapp number</Label>
                      <Input
                        type="number"
                        name="whatsappNumber"
                        id="whatsappNumber"
                        value={leadDetails.whatsappNumber}
                        onChange={handleValueChange}
                        invalid={!!leadDetails.whatsappNumberError}
                      />
                      <FormFeedback invalid>
                        {leadDetails.whatsappNumberError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        value={leadDetails.email}
                        onChange={handleValueChange}
                        invalid={!!leadDetails.emailError}
                      />
                      <FormFeedback invalid>
                        {leadDetails.emailError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="addressText">Address</Label>
                      <Input
                        type="textarea"
                        name="address"
                        id="addressText"
                        value={leadDetails.address}
                        onChange={handleValueChange}
                      />
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          {console.log("leadDetails", leadDetails)}
                          <Label for="citySelect">City</Label>
                          <Input
                            type="select"
                            name="city"
                            id="city"
                            value={leadDetails.city}
                            onChange={handleValueChange}
                          >
                            <option value="">Select</option>
                            {cities.map((city) => (
                              <option>{city.name}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="pinCode">Pincode</Label>
                          <Input
                            type="number"
                            name="pincode"
                            id="pincode"
                            value={leadDetails.pincode}
                            onChange={handleValueChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="industryName">Industry / Sector</Label>
                      <Input
                        type="text"
                        name="industry"
                        id="industry"
                        value={leadDetails.industry}
                        onChange={handleValueChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="statusSelect">Status*</Label>
                      <Input
                        type="select"
                        name="status"
                        id="status"
                        value={leadDetails.status}
                        onChange={handleValueChange}
                        invalid={!!leadDetails.statusError}
                      >
                        <option value="">Select</option>
                        {statusArray.map((status) => (
                          <option>{status.label}</option>
                        ))}
                      </Input>
                      <FormFeedback invalid>
                        {leadDetails.statusError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="sourceSelect">Source*</Label>
                      <Input
                        type="select"
                        name="source"
                        id="source"
                        value={leadDetails.source}
                        onChange={handleValueChange}
                        invalid={!!leadDetails.sourceError}
                      >
                        <option value="">Select</option>
                        {sourceArray.map((source) => (
                          <option>{source.label}</option>
                        ))}
                      </Input>
                      <FormFeedback invalid>
                        {leadDetails.sourceError}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="remarksText">Remarks</Label>
                      <Input
                        type="textarea"
                        name="remark"
                        id="remark"
                        value={leadDetails.remark}
                        onChange={handleValueChange}
                      />
                    </FormGroup>
                    <div className=" d-flex justify-content-end ">
                      <Button color="link" onClick={toggle}>
                        Cancel
                      </Button>
                      <Button
                        color="primary"
                        onClick={handlePrimaryButtonClick}
                      >
                        Submit
                      </Button>{" "}
                    </div>
                  </Form>
                </CardBody>
              </Col>
            </Row>
          </Container>
        </ReactCSSTransitionGroup>
      </Fragment>
    </CustomSlide>
  );
};

export default AddEditLead;
