import React from 'react';
import { connect } from 'react-redux';

import {abilities} from 'client/ability';
import Can from 'hocs/Can';
import {IBaseState} from "store/interfaces";
import {getUserRoleUppercased, normalizeState as normalizeUserState} from 'store/users/selectors';
import {IProps, IStateProps} from "./interfaces";

const mapStateToProps = (state: IBaseState): IStateProps => {
    return {
        userRole: getUserRoleUppercased(normalizeUserState(state)),
    };
};

export function Ability(props: IProps) {
    return <Can abilities={abilities[props.userRole]} run={props.run} on={props.on}>
        {props.children}
    </Can>
}

export default connect(mapStateToProps)(Ability);
