import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function H6(props: IProps) {
    return <h6 className={props.classes}>{props.children}</h6>;
}

export default H6;