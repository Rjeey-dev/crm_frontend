import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {abilities} from 'client/ability';
import DeniedPage from "pages/DeniedPage";
import {IBaseState} from "store/interfaces";
import {getUserRoleUppercased, normalizeState as normalizeUserState} from 'store/users/selectors';
import {IProps, IStateToProps} from "./interfaces";

const mapStateToProps = (state: IBaseState): IStateToProps => {
    return {
        userRole: getUserRoleUppercased(normalizeUserState(state)),
    };
};

export class Authorization extends React.Component<IProps> {
    public render() {
        if (!abilities[this.props.userRole].can('visit', this.props.match.path)) {
            return <DeniedPage/>
        }

        return this.props.children;
    }
}

// @ts-ignore
export default withRouter(connect(mapStateToProps)(Authorization));
