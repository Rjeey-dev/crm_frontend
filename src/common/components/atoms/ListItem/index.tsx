import React, {FormEvent, ReactNode} from "react";

interface IProps {
    children: ReactNode,
    classes?: string,
    handleClick?: (event: FormEvent<HTMLLIElement>) => void,
    attributes?: any
}

function ListItem(props: IProps) {
    return <li className={props.classes} onClick={props.handleClick} {...props.attributes}>{props.children}</li>
}

export default ListItem;