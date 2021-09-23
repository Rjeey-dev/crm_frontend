import {IEvent} from "store/interfaces";
import {
    ON_USER_STATE_SYNCED_FAILED,
    ON_USER_STATE_SYNCED_SUCCESSFULLY,
    ON_USER_SUCCESSFULLY_LOGGED_IN,
    ON_SUCCESSFUL_GOOGLE_LOGIN,
    ON_UNSUCCESSFUL_GOOGLE_LOGIN,
    ON_USER_LOGOUT,
    ON_SUCCESSFUL_USER_LOGOUT,
    ON_USER_LOGGED_IN,
} from "store/users/actions";

export interface IAuthState {
    auth: IUserAuth
}

export interface IUserEvent extends IEvent {
    payload: any
}

export interface IUserSettings {
    lang: string,
    theme: string,
    currency: string
}

export interface IUserAuth {
    user: IUser,
    token: string,
    subscriptionToken: string
}

export interface IUser {
    id: string,
    name: string,
    login: string,
    email: string,
    phone: string,
    password: string,
    image: string,
    settings: IUserSettings,
    token: string,
    role: IUserRole,
    instagram: string,
    facebook: string,
    vk: string,
    google: string,
    context: {
        write_route_review_requests: [],
        write_route_participants_review_requests: [],
        has_requested_become_pro_traveler_status: false,
        subscribed_for_site_notifications: false,
        referral_system: {
            invited_by: undefined,
            invited_users: []
        },
        wishlist: [],
        comment?: string
    },
}

export interface IUserRole {
    name: string,
    updated: Date
}

export interface IUnUserLoggedInEvent {
    type: typeof ON_USER_LOGGED_IN,
    payload: IUnUserLoggedInEventPayload
}

export interface IUnUserLoggedInEventPayload {
    user: IUser,
    subscriptionToken: string,
    token: string
}

export interface IUnUserSuccessfulLoggedInEvent {
    type: typeof ON_USER_SUCCESSFULLY_LOGGED_IN,
}

export interface ISuccessfulGoogleLoginEvent {
    type: typeof ON_SUCCESSFUL_GOOGLE_LOGIN ,
    payload: ISuccessfulGoogleLoginEventPayload
}

export interface ISuccessfulGoogleLoginEventPayload {
    token: string,
    userId: string,
    image: string,
    email: string,
    firstName: string,
    lastName: string
}

export interface IUnSuccessfulGoogleLoginEvent {
    type: typeof ON_UNSUCCESSFUL_GOOGLE_LOGIN,
    payload: IUnSuccessfulGoogleLoginEventPayload
}

export interface IUnSuccessfulGoogleLoginEventPayload {
    error: string
}

export interface IOnUserLogOutEvent {
    type: typeof ON_USER_LOGOUT
}

export interface IOnSuccessfulUserLogOutEvent {
    type: typeof ON_SUCCESSFUL_USER_LOGOUT
}

export interface IOnUserStateSyncSuccessfulEvent {
    type: typeof ON_USER_STATE_SYNCED_SUCCESSFULLY,
    payload: IOnUserStateSyncSuccessfulEventPayload
}

export interface IOnUserStateSyncSuccessfulEventPayload {
    user: IUser
}

export interface IOnUserStateSyncFailedEvent {
    type: typeof ON_USER_STATE_SYNCED_FAILED,
    payload: IOnUserStateSyncFailedEventPayload
}

export interface IOnUserStateSyncFailedEventPayload {
    error: string
}
