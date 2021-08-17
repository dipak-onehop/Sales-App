import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";

import Slider from "react-slick";

import bg1 from "../../../assets/utils/images/login_bg.png";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  redirectToDashboard = () => {
    this.setState({ redirect: true });
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    };

    return (
      <Fragment>
        <div className="h-100">
          <Row className="h-100 no-gutters">
            <Col lg="4" className="d-none d-lg-block">
              <div className="slider-light">
                <Slider {...settings}>
                  <div className="h-100 d-flex justify-content-center align-items-center">
                    <div
                      className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                        opacity: "1",
                      }}
                    />
                    <div
                      className="slider-content"
                      style={{ color: "#000",marginTop:'117%'}}
                    >
                      {/* <h3>Walkins CRM</h3>
                      <p>
                        Store, Manage and Check your Business Whenever You Want!
                      </p> */}
                      Walkins Enterprise CRM Enables Teams, Optimize Business
                      And Enhances Execution
                    </div>
                  </div>
                  {/* <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                            style={{
                                                backgroundImage: 'url(' + bg3 + ')'
                                            }} />
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                        <div className="slide-img-bg opacity-6"
                                            style={{
                                                backgroundImage: 'url(' + bg2 + ')'
                                            }} />
                                        <div className="slider-content">
                                            <h3>Complex, but lightweight</h3>
                                            <p>
                                                We've included a lot of components that cover almost all use cases for
                                                any type of application.
                                            </p>
                                        </div>
                                    </div> */}
                </Slider>
              </div>
            </Col>
            <Col
              lg="8"
              md="12"
              className="h-100 d-flex bg-white justify-content-center align-items-center"
            >
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo">
                  <img
                    height="40"
                    width="140"
                    src="/static/media/logo-inverse.8a9178dc.png"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="mb-0">
                  <div>Welcome back,</div>
                  <span>Please sign in to your account.</span>
                </h4>
                <h6 className="mt-3">
                  No account?{" "}
                  <a href="javascript:void(0);" className="text-primary">
                    Sign up now
                  </a>
                </h6>
                <Row className="divider" />
                <div>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email here..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Password here..."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup check>
                      <Input type="checkbox" name="check" id="exampleCheck" />
                      <Label for="exampleCheck" check>
                        Keep me logged in
                      </Label>
                    </FormGroup>
                    <Row className="divider" />
                    <div className="d-flex align-items-center">
                      <div className="ml-auto">
                        <a
                          href="javascript:void(0);"
                          className="btn-lg btn btn-link"
                        >
                          Recover Password
                        </a>{" "}
                        <Button
                          color="primary"
                          size="lg"
                          onClick={() => this.redirectToDashboard()}
                        >
                          Login to Dashboard
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: "/dashboards/crm",
            }}
          />
        )}
      </Fragment>
    );
  }
}
