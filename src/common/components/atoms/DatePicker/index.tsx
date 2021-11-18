import React from "react";
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import {IProps} from "./interfaces";
import Translation from "atoms/Translation";
import Label from "atoms/Label";

class DatePickerComponent extends React.Component<IProps> {
    state = {
        selected: undefined
    }

    private onChange = (date: any) => {
        const dateFormatted = moment(date).unix();

        this.setState({
            selected: date
        }, () => {
            this.props.input.onChange(dateFormatted);
        })
    }

    render() {
        return <div className='form-group'>
            <Label classes='label'><Translation source={this.props.label}/></Label>
            <DatePicker selected={this.state.selected} onChange={this.onChange} showTimeSelect={true} timeFormat="p" timeIntervals={15} dateFormat="Pp"/>
        </div>
    }
}

export default DatePickerComponent;