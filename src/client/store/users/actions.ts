import {
    IOnSuccessfulUserLogOutEvent,
    IOnUserLogOutEvent,
    IOnUserStateSyncFailedEvent,
    IOnUserStateSyncSuccessfulEvent,
    ISuccessfulGoogleLoginEvent,
    IUnSuccessfulGoogleLoginEvent,
    IUnUserLoggedInEvent,
    IUnUserSuccessfulLoggedInEvent,
    IUser,
} from "store/users/interfaces";

export const ON_USER_STATE_SYNCED_SUCCESSFULLY = 'ON_USER_STATE_SYNCED_SUCCESSFULLY';
export const ON_USER_STATE_SYNCED_FAILED = 'ON_USER_STATE_SYNCED_FAILED';
export const ON_SUCCESSFUL_USER_LOGOUT = 'ON_SUCCESSFUL_USER_LOGOUT';
export const ON_USER_LOGOUT = 'ON_USER_LOGOUT';
export const ON_SUCCESSFUL_GOOGLE_LOGIN = 'ON_SUCCESSFUL_GOOGLE_LOGIN';
export const ON_UNSUCCESSFUL_GOOGLE_LOGIN = 'ON_UNSUCCESSFUL_GOOGLE_LOGIN';
export const ON_USER_LOGGED_IN = 'ON_USER_LOGGED_IN';
export const ON_USER_SUCCESSFULLY_LOGGED_IN = 'ON_USER_SUCCESSFULLY_LOGGED_IN';

export const onUserLogOut = (): IOnUserLogOutEvent => ({
    type: ON_USER_LOGOUT
});

export const onSuccessfulUserLogOut = (): IOnSuccessfulUserLogOutEvent => ({
    type: ON_SUCCESSFUL_USER_LOGOUT
});

export const onUserStateSyncSuccessful = (user: IUser): IOnUserStateSyncSuccessfulEvent => ({
    type: ON_USER_STATE_SYNCED_SUCCESSFULLY,
    payload: {
        user
    }
});

export const onUserStateSyncFailed = (error: string): IOnUserStateSyncFailedEvent => ({
    type: ON_USER_STATE_SYNCED_FAILED,
    payload: {
        error
    }
});

export const onUserLoggedIn = (user: IUser, subscriptionToken: string, token: string): IUnUserLoggedInEvent => ({
    type: ON_USER_LOGGED_IN,
    payload: {
        user,
        token,
        subscriptionToken
    }
});

export const onSuccessfulUserLoggedIn = (): IUnUserSuccessfulLoggedInEvent => ({
    type: ON_USER_SUCCESSFULLY_LOGGED_IN
});

export const onSuccessfulGoogleLogin = (token: string, userId: string, image: string, email: string, firstName: string, lastName: string): ISuccessfulGoogleLoginEvent => ({
    type: ON_SUCCESSFUL_GOOGLE_LOGIN,
    payload: {
        token,
        userId,
        image,
        email,
        firstName,
        lastName
    }
});

export const onUnSuccessfulGoogleLogin = (error: string): IUnSuccessfulGoogleLoginEvent => ({
    type: ON_UNSUCCESSFUL_GOOGLE_LOGIN,
    payload: {
        error
    }
});
