import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode,
    classes?: string,
    id?: string
}

export default function List(props: IProps) {
    return <ul className={props.classes} id={props.id}>
        {props.children}
    </ul>
}
