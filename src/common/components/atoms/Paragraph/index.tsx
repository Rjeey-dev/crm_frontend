import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function Paragraph(props: IProps) {
    return <p className={props.classes}>{props.children}</p>;
}

export default Paragraph;