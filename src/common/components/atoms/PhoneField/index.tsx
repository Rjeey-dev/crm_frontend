import React, {Component} from "react";
// @ts-ignore
import PhoneInput from 'react-phone-number-input'

import {IProps} from "./interfaces";

class PhoneField extends Component<IProps> {
    render() {
        return <PhoneInput value={this.props.input.value} onChange={this.props.input.onChange} countrySelectProps={this.props.countrySelectProps}/>
    }
}

export default PhoneField;