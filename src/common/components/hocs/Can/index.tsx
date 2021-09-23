import React, {ReactNode} from "react";
import { Redirect } from 'react-router-dom';

import {ABILITY_VISIT} from "client/ability";
import {URL_DENIED} from "common/routes/paths";

interface IState {
    allowed: boolean
}

interface IProps {
    run: string,
    on: string,
    abilities: any,
    children: ReactNode
}

export default class Can extends React.PureComponent<IProps, IState> {
    public render() {
        const visit = this.props.run === ABILITY_VISIT;

        if (this.props.abilities.can(this.props.run, this.props.on)) {
            return React.Children.only(this.props.children);
        }

        if (visit) {
            return <Redirect to={URL_DENIED}/>;
        }

        return '';
    }
}