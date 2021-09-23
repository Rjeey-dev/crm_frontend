import React from "react";

import List from "molecules/List";
import {IProps} from "./interfaces";

export default function Menu(props: IProps) {
    return <List classes={props.classes}>
        {props.children}
    </List>
}
