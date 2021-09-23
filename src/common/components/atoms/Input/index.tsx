import React from 'react';

import Select from "common/components/atoms/Select/index";

const Input = ({ ...props }) => {
    if (props.type === 'textarea') {
        return <textarea {...props}/>
    } else if (props.type === 'select') {
        return <Select {...props} >{props.children}</Select>
    }

    return <input {...props}/>
};

export default Input;