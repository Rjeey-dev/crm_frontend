import {IUser} from "store/users/interfaces";

export interface WithCurrentUserHoFProps {
    currentUser?: IUser;
}

export interface WithCurrentUserNative {
    currentUser?: IUser;
}