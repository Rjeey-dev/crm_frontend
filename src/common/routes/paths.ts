import {languages} from "client/config";

export const URL_HOME = '/';
export const URL_HOME_LOCALIZED = '/:lang';
export const URL_DASHBOARD = '/:lang/dashboard';
export const URL_AUTH_GOOGLE_REDIRECT = '/google-auth';
export const URL_DENIED = '/:lang/denied';
export const URL_NOT_FOUND = '/:lang/not-found';
export const URL_FAILED_LOGIN = '/auth-failed';

export const composeLocalizedUrl = (url: string, lang: string): string => {
    return url.replace(':lang', lang);
};

export const getSupportedLanguages = (): string[] => {
    return languages.map((language: any) => {
        return language.code;
    });
};

export const replaceLocalizedUrlByNewLang = (url: string, lang: string): string => {
    const urlParsed = url.split('/');

    if (url === URL_HOME) {
        return composeLocalizedUrl(URL_HOME_LOCALIZED, lang);
    }

    const supportedLanguages = getSupportedLanguages();

    if (!supportedLanguages.includes(urlParsed[1])) {
        return url;
    }

    urlParsed[1] = lang;

    return urlParsed.join('/');
};
