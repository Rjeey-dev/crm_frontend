import {defaultFilePath} from "client/config";

export const getDefaultImagePath = (image: string): string => {
    return [defaultFilePath, image].join('/');
};

