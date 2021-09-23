import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function Small(props: IProps) {
    return <small className={props.classes}>{props.children}</small>;
}

export default Small;