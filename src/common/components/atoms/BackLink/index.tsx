import React from 'react';
import { withRouter } from 'react-router-dom';

import Link from 'common/components/atoms/Link/index';
import {IProps} from "./interfaces";

function BackLink(props: IProps) {
    return <Link href='#back' classes={props.classes} onClick={props.history.goBack}>{props.children}</Link>;
}

export default withRouter(BackLink);