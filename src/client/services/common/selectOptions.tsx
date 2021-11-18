import {IUser} from "store/users/interfaces";

export const generateUsersIdsOptions = (users: IUser[], currentUserId: string) => {
    return users.filter((user: IUser) => {
        return user.id !== currentUserId;
    }).map((user: IUser) => {
        return {
            value: user.id,
            label: user.name
        }
    });
};