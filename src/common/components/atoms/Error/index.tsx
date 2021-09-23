import React, {ReactNode} from 'react';

import Label from "common/components/atoms/Label/index";

interface IProps {
    children: ReactNode,
    id?: string
}

function Error(props: IProps) {
    return <Label id={props.id} classes="error text-danger">{props.children}</Label>
}

export default Error;
