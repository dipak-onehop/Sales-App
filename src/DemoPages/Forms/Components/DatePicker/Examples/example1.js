import React, {Fragment} from 'react'

import {
    InputGroup, InputGroupAddon
} from 'reactstrap';

import {
    faCalendarAlt,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import DatePicker from 'react-datepicker';

class FormDatePicker1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: this.props.type == 'end' ? new Date() : new Date('08/01/2021')
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        const {popperPlacement='auto'}=this.props;
        return (
            <Fragment>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </div>
                    </InputGroupAddon>
                    <DatePicker className="form-control"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                popperPlacement={popperPlacement?"bottom-end":"auto"}
                    />
                </InputGroup>
            </Fragment>
        )
    }
}

export default FormDatePicker1;