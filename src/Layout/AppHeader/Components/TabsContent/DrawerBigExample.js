import React, { Component, Fragment } from "react";

import {
  Row,
  Col,
  ListGroupItem,
  ListGroup,
  Button,
  CardTitle,
  CustomInput,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  ButtonGroup,
  Container,
} from "reactstrap";
import classnames from "classnames";

import {
  Sparklines,
  SparklinesCurve,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";

import Circle from "react-circle";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {
  faTrashAlt,
  faCheck,
  faFilePdf,
  faFileExcel,
  faFileArchive,
  faFileAlt,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../../assets/utils/images/avatars/9.jpg";
import avatar8 from "../../../../assets/utils/images/avatars/10.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w,
    z;

  return (function() {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);

class DrawerBigExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      activeTab: "1",
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggleTabs(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <h3 className="drawer-heading">Notifications</h3>
        <div className="drawer-section">
          <Row>
            <div>
              <CardHeader className="card-header-tab card-header-tab-animation ml-0">
                <Nav className="ml-0">
                  <NavItem>
                    <NavLink
                      href="javascript:void(0);"
                      className={classnames({
                        active: this.state.activeTab === "1",
                      })}
                      onClick={() => {
                        this.toggleTabs("1");
                      }}
                    >
                      Meeting Reminder
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="javascript:void(0);"
                      className={classnames({
                        active: this.state.activeTab === "2",
                      })}
                      onClick={() => {
                        this.toggleTabs("2");
                      }}
                    >
                      Renewal Reminder
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="javascript:void(0);"
                      className={classnames({
                        active: this.state.activeTab === "3",
                      })}
                      onClick={() => {
                        this.toggleTabs("3");
                      }}
                    >
                      Anniversary Notification
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="javascript:void(0);"
                      className={classnames({
                        active: this.state.activeTab === "4",
                      })}
                      onClick={() => {
                        this.toggleTabs("4");
                      }}
                    >
                      Birthday Notification
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <VerticalTimeline
                      animate={false}
                      layout="1-column"
                      className="vertical-time-simple vertical-without-time"
                    >
                      {/* <VerticalTimelineElement className="vertical-timeline-item dot-danger">
                        <h4 className="timeline-title">All Hands Meeting</h4>
                      </VerticalTimelineElement> */}
                      <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                        <p>
                          Your next meeting is due in{" "}
                          <span className="text-success">30 mins</span> with
                          Krishna beauty zone{" "}
                          <span className="text-success">(7041853241)</span>.
                        </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement className="vertical-timeline-item dot-primary">
                        Your next meeting is due in{" "}
                        <span className="text-success">30 mins</span> with Astha
                        Mobile
                        <span className="text-success">(8876545672)</span>.
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                  </TabPane>
                  <TabPane tabId="2">
                    <VerticalTimeline
                      animate={false}
                      layout="1-column"
                      className="vertical-time-simple vertical-without-time"
                    >
                      <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                        <p>
                          Renewal of the following business is due in{" "}
                          <span className="text-success">15 days</span>
                          NEW RAMDEV ANILKUMAR GANDHI{" "}
                          <span className="text-success">9978909888</span>{" "}
                          Kindly contact the business and take necessary action.
                        </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement className="vertical-timeline-item dot-primary">
                        Renewal of the following business is due in{" "}
                        <span className="text-success">15 days</span>
                        Samsung Smart Plaza SAGAR KORAT{" "}
                        <span className="text-success">9874523189</span> Kindly
                        contact the business and take necessary action.
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                  </TabPane>
                  <TabPane tabId="3">
                    <VerticalTimeline
                      animate={false}
                      layout="1-column"
                      className="vertical-time-simple vertical-without-time"
                    >
                      <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                        <p>
                          <span className="text-info font-weight-bold">1</span>{" "}
                          Customers have birthday today. Wish Happy Birthday
                        </p>
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                  </TabPane>
                  <TabPane tabId="4">
                  <VerticalTimeline
                      animate={false}
                      layout="1-column"
                      className="vertical-time-simple vertical-without-time"
                    >
                    <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                        <p>
                        <span className="text-info font-weight-bold">1</span>{" "}
                    Customers have Anniversary today. Wish Happy Anniversary
                        </p>
                      </VerticalTimelineElement>
                      </VerticalTimeline>
                  </TabPane>
                </TabContent>
              </CardBody>
            </div>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default DrawerBigExample;
