import {TranslateProps} from "react-localize-redux";

import Error from "common/components/atoms/Error/index";
import Input from "common/components/atoms/Input/index";
import InputStatus from "common/components/atoms/InputStatus/index";
import Label from "common/components/atoms/Label/index";
import Small from "common/components/atoms/Small/index";
import Translation from "common/components/atoms/Translation/index";
import React from 'react';

interface IProps {
    error: TranslateProps,
    name: string,
    invalid: boolean,
    label: TranslateProps,
    type: string,
    value: string,
    initial?: string,
    defaultValue?: string,
    withoutStatus?: boolean,
    disabled?: boolean,
    description?: TranslateProps,
}

const fieldStatus = (withoutStatus: boolean, isDefault: boolean, invalid: boolean) => {
    return withoutStatus ? '' : <InputStatus isDefault={isDefault} isValid={!invalid}/>;
};

const Field = (props: IProps) => {
    const {invalid, value, disabled} = props;

    let errors;
    let description;
    const args = Object.assign({}, props) as IProps;
    const isDefault = value === '';
    const withoutStatus = 'undefined' !== typeof(props.withoutStatus);
    delete args.withoutStatus;

    const inputProps = {
        id: args.name, 'aria-describedby': `${args.name}Error`, ...args, className: 'form-control', disabled: disabled ? disabled : false
    };

    const renderInputFirst = inputProps.type === 'checkbox' || inputProps.type === 'radio';

    if (invalid) {
        inputProps.className += ' form-control-danger';
        errors = <Error id={`${args.name}Error`}>
            <Translation source={args.error}/>
        </Error>
    }

    if (inputProps.description) {
        description = <Small classes='form-text'>
            <Translation source={inputProps.description}/>
        </Small>
    }

    const label = args.label ? <Label htmlFor={inputProps.id} classes='label'><Translation source={args.label}/></Label> : '';

    return <div className='form-group'>
        {label}
        <div className='input-group'>
            {renderInputFirst && <Input {...inputProps} />}
            {renderInputFirst || <Input {...inputProps} />}
            {fieldStatus(withoutStatus, isDefault, invalid)}
        </div>
        {description}
        {errors}
    </div>
};

export default Field;