import React from 'react';

import Img from 'common/components/atoms/Img/index';
import {URL_HOME_LOCALIZED} from "common/routes/paths";
import LocalizedLink from "containers/links/LocalizedLink";

interface IProps {
    classes?:string,
}

function Logo(props: IProps) {
    return <LocalizedLink to={URL_HOME_LOCALIZED} className={props.classes}><Img src='/static/images/logo.png' alt='Logo' lazyLoad={false}/></LocalizedLink>;
}

export default Logo;