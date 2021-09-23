import React from 'react';

import {ReactNode, ReactNodeArray} from "react";

interface IProps {
    children: ReactNode | ReactNodeArray,
    classes?: string,
    name?: string
}

function Select(props: IProps) {
    return <select name={props.name} className={props.classes}>
        {props.children}
    </select>;
}

export default Select;