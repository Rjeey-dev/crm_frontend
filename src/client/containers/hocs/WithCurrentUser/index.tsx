import React, {Component, ComponentType} from 'react';
import { connect } from 'react-redux';

import {IBaseState} from "store/interfaces";
import {WithCurrentUserHoFProps, WithCurrentUserNative} from "./interfaces";
import {getCurrentUser, normalizeState} from "store/users/selectors";

const mapStateToProps = (state: IBaseState): WithCurrentUserHoFProps => {
    return {
        currentUser: getCurrentUser(normalizeState(state)),
    };
};

function withCurrentUser<T extends WithCurrentUserNative>(WrappedComponent: ComponentType<T>) {
    class CurrentUser extends Component<WithCurrentUserHoFProps & T, {}> {
        public render() {
            // @ts-ignore
            return <WrappedComponent {...this.props} currentUser={this.props.currentUser}>
                {this.props.children}
            </WrappedComponent>
        }
    }

    // @ts-ignore
    return connect(mapStateToProps)(CurrentUser);
}

export default withCurrentUser;


