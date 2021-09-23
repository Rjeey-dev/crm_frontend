import React, {FormEvent} from "react";
import {Component} from "react";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Dispatch} from "redux";

import Translation from 'atoms/Translation';
import LocalizedLink from "containers/links/LocalizedLink";
import {translation} from "services/common/translations";
import { onUserLogOut } from 'store/users/actions';
import {IMapDispatchToProps, IProps} from "./interfaces";
import Span from "atoms/Span";

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        onUserLogOut: () => dispatch(onUserLogOut()),
    };
};

export class LogOutLink extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick = (event: FormEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        this.props.onUserLogOut();
    };

    public render() {
        return <LocalizedLink to='#' onClick={this.handleClick} className='dropdown-item'>
            <Span><Translation source={translation('menus.sign_out')}/></Span>
        </LocalizedLink>;
    }
}

// @ts-ignore
export default withRouter(connect(null, mapDispatchToProps)(LogOutLink));