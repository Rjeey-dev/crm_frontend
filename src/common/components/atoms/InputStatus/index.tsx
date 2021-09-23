import React from 'react';

import Icon from "common/components/atoms/Icon/index";
import Span from "common/components/atoms/Span/index";

interface IProps {
    isDefault: boolean,
    isValid: boolean,
}

function InputStatus(props: IProps) {
    let classes = '';
    let wrapperClasses= 'input-group-text';

    if (props.isDefault) {
        classes = 'mdi-check-circle-outline';
    } else {
        classes = props.isValid ? 'mdi-check-circle' : 'mdi-check-circle with-error';
    }

    if (!props.isValid && !props.isDefault) {
        wrapperClasses += ' input-group-text-danger';
    }

    return <div className="input-group-append">
            <Span classes={wrapperClasses}>
                <Icon classes={'mdi ' + classes}/>
            </Span>
    </div>
}

export default InputStatus;