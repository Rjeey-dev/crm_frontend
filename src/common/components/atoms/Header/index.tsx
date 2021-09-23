import {ReactNodeArray} from "prop-types";
import React, {ReactNode} from "react";

interface IProps {
    classes?: string,
    id?: string,
    children?: ReactNodeArray | ReactNode
}

function Header(props: IProps) {
    return <header className={props.classes} id={props.id}>{props.children}</header>;
}

export default Header;