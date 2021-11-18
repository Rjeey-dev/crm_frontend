import React from 'react';

import {URL_HOME_LOCALIZED} from "common/routes/paths";
import LocalizedLink from "containers/links/LocalizedLink";

interface IProps {
    classes?:string,
}

function Logo(props: IProps) {
    return <LocalizedLink to={URL_HOME_LOCALIZED} className={props.classes}>CRM</LocalizedLink>;
}

export default Logo;