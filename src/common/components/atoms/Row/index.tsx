import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    children: ReactNodeArray | ReactNode,
    classes?: string
}

export default function Row(props: IProps) {
    const classes = ['row', props.classes].join(' ');

    return <div className={classes}>
        {props.children}
    </div>;
}