import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function H3(props: IProps) {
    return <h3 className={props.classes}>{props.children}</h3>;
}

export default H3;