import {
    staticFilesUrl,
    defaultCurrency,
    defaultFilePath,
    defaultLanguage,
    ANONYMOUS,
    ADMIN,
} from 'client/config';
import {IBaseState} from "store/interfaces";
import {
    IAuthState,
    IUser,
} from "store/users/interfaces";
import {Language} from "react-localize-redux";

export const USER_PROFILE_DEFAULT_RESOLUTION = 'normal';
export const USER_PROFILE_THUMBNAIL_RESOLUTION = 'thumbnail';

export const authInitialState = {
    user: {
        id: '',
        name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
        image: '',
        settings: {
            lang: defaultLanguage,
            theme: '',
            currency: defaultCurrency.value,
        },
        token: '',
        role: {
            name: ANONYMOUS,
            updated: new Date()
        },
        instagram: '',
        facebook: '',
        vk: '',
        google: '',
    } as IUser,
    token: '',
    subscriptionToken: ''
};

export const getInitialState = () => {
    return {
        auth: {
            ...authInitialState
        }
    }
};

export const getCurrentUser = (state: IAuthState): IUser | undefined => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;

    return normalizedState.auth.user;
};

export const getUser = (state: IAuthState): IUser | undefined => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;

    if ('user' in normalizedState.auth && 'id' in normalizedState.auth.user && normalizedState.auth.user.id !== '') {
        return normalizedState.auth.user;
    }

    return undefined;
};

export const getUsers = (state: IAuthState): IUser | undefined => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;

    if ('user' in normalizedState.auth && 'id' in normalizedState.auth.user && normalizedState.auth.user.id !== '') {
        return normalizedState.auth.user;
    }

    return undefined;
};

const getUserObject = (state: IAuthState): IUser => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;

    return normalizedState.auth.user;
};

export const getUserToken = (state: IAuthState): string | undefined => {
    return state.auth.token;
};

export const setUserToken = (state: IAuthState, token: string): void => {
    state.auth.token = token;
};

export const setSubscriptionUserToken = (state: IAuthState, token: string): void => {
    state.auth.subscriptionToken = token;
};

export const getSubscriptionUserToken = (state: IAuthState): string => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;

    return normalizedState.auth.subscriptionToken;
};

export const getCurrentLanguage = (lang?: Language) : string => {
    if (!lang) {
        return defaultLanguage;
    }

    return lang.code;
};

export const setUser = (state: IAuthState, user: IUser): void => {
    state.auth.user = user;
};

export const getUserLang = (state: IAuthState): string => {
    const user = getUserObject(state);

    return user.settings.lang;
};

export const getUserRole = (state: IAuthState): string => {
    const user = getUser(state);

    if (user) {
        return getRole(user);
    }

    return ANONYMOUS;
};

export const getRole = (user: IUser): string => {
    return user.role.name;
};

export const isUserAnonymous = (state: IBaseState): boolean => {
    const normalizedState = ('app' in state) ? Object.assign({}, normalizeState(state)) : state;
    const role = getUserRole(normalizedState);

    return role === ANONYMOUS;
}

export const isAdmin = (user: IUser): boolean => {
    return getRole(user) === ADMIN;
}

export const isAnonymous = (user: IUser): boolean => {
    return getRole(user) === ANONYMOUS;
}

export const isAnonymousByRole = (role: string): boolean => {
    return role === ANONYMOUS;
}

export const getUserRoleUppercased = (state: IAuthState): string => {
    const role = getUserRole(state);

    return role.toUpperCase();
};

export const getProfileImagePath = (user: IUser, resolution?: string): string => {
    if (!user.image) {
        return defaultFilePath + '/no-user.png';
    }

    if (user.image.indexOf("http") >-1) {
        return user.image;
    }

    const imageResolution = resolution ? resolution : USER_PROFILE_THUMBNAIL_RESOLUTION;

    return [staticFilesUrl, 'profile_images/' + imageResolution, user.id, user.image].join('/');
};

export const normalizeState = (state: IBaseState): IAuthState => {
    return state.users;
};
