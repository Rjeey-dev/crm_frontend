import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function H4(props: IProps) {
    return <h4 className={props.classes}>{props.children}</h4>;
}

export default H4;