import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {IProps} from "./interfaces";

export default function ScrollTop(props: IProps) {
    return <AnchorLink href={props.href} id='scroll-top'>
        <FontAwesomeIcon icon={faChevronCircleUp}/>
    </AnchorLink>;
}