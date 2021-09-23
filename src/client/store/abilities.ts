import {Store} from "redux";

import {abilities} from 'client/ability';
import {IEvent} from "store/interfaces";
import {getUserRoleUppercased, normalizeState as normalizeUserState} from 'store/users/selectors';

const abilitiesMiddleware = (store: Store) => (next: any) => (action: IEvent): any => {
    const ability = abilities[getUserRoleUppercased(normalizeUserState(store.getState()))];
    const { type } = action;

    if (ability.can('do', type)) {
        return next(action);
    }
};

export default abilitiesMiddleware;
