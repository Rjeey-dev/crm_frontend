import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    id?: string,
    children?: ReactNodeArray | ReactNode
}

function H2(props: IProps) {
    return <h2 className={props.classes} {...props}>{props.children}</h2>;
}

export default H2;