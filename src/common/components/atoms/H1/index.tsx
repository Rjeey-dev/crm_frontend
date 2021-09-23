import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function H1(props: IProps) {
    return <h1 className={props.classes}>{props.children}</h1>;
}

export default H1;