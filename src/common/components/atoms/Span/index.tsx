import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    id?: string,
    children?: ReactNodeArray | ReactNode,
    attributes?: object,
    onClick?: (event: React.FormEvent<HTMLSpanElement>) => void
}

function Span(props: IProps) {
    return <span onClick={props.onClick} className={props.classes} {...props.attributes} id={props.id}>{props.children}</span>;
}

export default Span;
