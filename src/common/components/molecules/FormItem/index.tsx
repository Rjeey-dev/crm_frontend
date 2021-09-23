import React from 'react';

import Field from "common/components/atoms/Field/index";

interface IProps {
    meta: any,
    input: any,
}

const FormItem = ({ meta, input, ...props }: IProps) => {
    const fieldProps = {...props, initial: meta.initial, ...input, invalid: meta.touched && !!meta.error, error: meta.error,};

    if (fieldProps.type === 'text' || fieldProps.type === 'textarea') {
        return <Field {...fieldProps} >{fieldProps.children}</Field>
    }

    return <Field {...fieldProps} >{fieldProps.children}</Field>
};

export default FormItem;
