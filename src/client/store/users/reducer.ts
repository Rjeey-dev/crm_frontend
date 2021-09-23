import {
    ON_SUCCESSFUL_USER_LOGOUT,
    ON_USER_LOGGED_IN,
    ON_USER_STATE_SYNCED_SUCCESSFULLY
} from "./actions";

import {IAuthState, IUserAuth, IUserEvent} from "store/users/interfaces";
import {
    getInitialState,
    setSubscriptionUserToken,
    setUser,
    setUserToken,
} from './selectors';

const userReducer = (state: IAuthState = getInitialState(), {type, payload}: IUserEvent): IAuthState => {
    const newState = {...state};

    switch (type) {
        case ON_USER_LOGGED_IN:
            const payloadData = payload as IUserAuth;
            setUser(newState, payloadData.user);
            setUserToken(newState, payloadData.token);
            setSubscriptionUserToken(newState, payloadData.subscriptionToken);

            return newState;
        case ON_USER_STATE_SYNCED_SUCCESSFULLY:
            const requestPayloadData = payload as IUserAuth;
            setUser(newState, requestPayloadData.user);

            return newState;
        case ON_SUCCESSFUL_USER_LOGOUT:
            return getInitialState();
        default:
            break;
    }

    return state;
};

export default userReducer;
