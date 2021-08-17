import React, {Fragment, Component} from "react";

import {
    Card, CardBody
} from 'reactstrap';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './Events'

const localizer = BigCalendar.momentLocalizer(moment)


export default class CalendarBasic extends Component {
    onSelectEvent=()=>{
        window.scrollTo(0,document.body.scrollHeight);
    }
    render() {
        return (
            <Fragment>
                <Card className="" style={{height:'89%'}}>
                    <CardBody>
                        <BigCalendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            views={['month']}
                            style={{ height: 500 }}
                            onSelectEvent={this.onSelectEvent}
                        />
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}
