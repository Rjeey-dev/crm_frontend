import {ReactNodeArray} from "prop-types";
import React, {ReactNode} from "react";

interface IProps {
    id?: string,
    classes?: string,
    children?: ReactNodeArray | ReactNode
}

function Nav(props: IProps) {
    return <nav className={props.classes} id={props.id}>{props.children}</nav>;
}

export default Nav;