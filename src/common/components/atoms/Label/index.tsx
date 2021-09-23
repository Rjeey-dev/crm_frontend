import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode,
    classes?: string,
    htmlFor?: string,
    id?: string
}

function Label(props: IProps) {
    return <label id={props.id} htmlFor={props.htmlFor} className={props.classes}>{props.children}</label>;
}

export default Label;