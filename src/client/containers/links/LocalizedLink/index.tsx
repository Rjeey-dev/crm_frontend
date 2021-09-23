import React from "react";
import {Component} from "react";
import {NavLink} from 'react-router-dom';

import {composeLocalizedUrl} from "common/routes/paths";
import {IProps} from "./interfaces";
import {IBaseState} from "store/interfaces";
import {IMapStateToProps} from "./interfaces";
import {getActiveLanguage} from "react-localize-redux";
import {connect} from "react-redux";
import {getCurrentLanguage} from "store/users/selectors";

const mapStateToProps = (state: IBaseState): IMapStateToProps => {
    return {
        lang: getCurrentLanguage(getActiveLanguage(state.localize)),
    }
};

export class LocalizedLink extends Component<IProps> {
    public render() {
        const exact = this.props.exact ? this.props.exact : false;
        const target = this.props.target ? this.props.target : undefined;
        let to = composeLocalizedUrl(this.props.to, this.props.lang);

        if (this.props.hash) {
            to += '#' + this.props.hash;
        }

        return <NavLink to={to} exact={exact} className={this.props.className} target={target} onClick={this.props.onClick} {...this.props.attributes}>
            {this.props.children}
        </NavLink>;
    }
}

export default connect(mapStateToProps)(LocalizedLink);