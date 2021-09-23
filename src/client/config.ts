import merge from "lodash/merge";

export const USD = 'USD';
export const EUR = 'EUR';
export const RUB = 'RUB';

export const RU = 'ru';
export const EN = 'en';
export const DE = 'de';

export const ANONYMOUS = 'anonymous';
export const ADMIN = 'admin';
export const USER = 'user';

const defaultCurrencyObject = {
    value: USD,
    code: '$'
};

const exportConfig = {
    all: {
        host: process.env.REACT_APP_API_ENDPOINT,
        port: process.env.PORT,
        url: process.env.REACT_APP_URL,
        frontendUrl: process.env.REACT_APP_FRONTEND_HOST_URL,
        urlWithOutTrailSlash: process.env.REACT_APP_URL_WITHOUT_TRAILING_SLASH,
        staticFilesUrl: process.env.REACT_APP_STATIC_FILES_URL,
        apiUrl: process.env.REACT_APP_API_HOST_URL,
        webSocketUrl: process.env.REACT_APP_WEB_SOCKET_URL,
        webSocketName: 'ws',
        basename: 'Travelix',
        defaultLanguage: 'en',
        env: process.env.NODE_ENV || 'development',
        isBrowser: typeof window !== 'undefined',
        isDev: process.env.NODE_ENV !== 'production',
        defaultFilePath: '/static/images',
        resolutionBreakpoints: {default: 3, 900: 2, 480: 1},
        resolutionBreakpointsTwoItems: {default: 2, 900: 2, 480: 1},
        languages: [
            { name: "English", code: "en" },
            { name: "German", code: "de" },
            { name: "Russian", code: "ru" },
        ],
        userRoles: [
            ADMIN,
            USER,
            ANONYMOUS
        ],
        facebook: {
            appId: process.env.REACT_APP_FACEBOOK_APP_ID,
            redirectUrl: process.env.REACT_APP_FACEBOOK_REDIRECT_URL,
        },
        instagram: {
            appId: process.env.REACT_APP_INSTAGRAM_APP_ID,
            redirectUrl: process.env.REACT_APP_INSTAGRAM_REDIRECT_URL,
        },
        vk: {
            appId: '7493945',
        },
        twitter: {
            loginUrl: process.env.REACT_APP_TWITTER_LOGIN_URL,
            requestTokenUrl: process.env.REACT_APP_TWITTER_REQUEST_TOKEN_URL,
        },
        tinyMce: {
            apiKey: '7p4bt16rdz7b0g693aoy9vusn2vxtjaorzl0cg28r0ehagaj',
        },
        preferred_languages: [
            'en',
            'ru',
            'de',
            'it',
            'cn',
            'no',
            'pl',
            'pt',
            'rs',
            'tr',
            'ua',
            'fi',
            'fr',
            'cz',
        ],
        default_currency: defaultCurrencyObject,
        currencies: [
            defaultCurrencyObject,
            {
                value: RUB,
                code: '₽'
            },
            {
                value: EUR,
                code: '€'
            },
        ],
        routePackagesRejectModerationOptions: [
            {
                id: 'title_is_to_bad',
            },
            {
                id: 'name_is_to_bad',
            },
        ],
        banUserOptions: [
            {
                id: 'title_is_to_bad',
            },
            {
                id: 'name_is_to_bad',
            },
        ],
        unbanUserOptions: [
            {
                id: 'title_is_to_bad2',
            },
            {
                id: 'name_is_to_bad2',
            },
        ]
    },
};

const config = merge(exportConfig.all, exportConfig[ exportConfig.all.env ]);

export const url = config.url;
export const frontendUrl = config.frontendUrl;
export const urlWithOutTrailSlash = config.urlWithOutTrailSlash;
export const routePackagesRejectModerationOptions = config.routePackagesRejectModerationOptions;
export const banUserOptions = config.banUserOptions;
export const unbanUserOptions = config.unbanUserOptions;
export const apiUrl = config.apiUrl;
export const staticFilesUrl = config.staticFilesUrl;
export const defaultLanguage = config.defaultLanguage;
export const languages = config.languages;
export const basename = config.basename;
export const port = config.port;
export const host = config.host;
export const userRoles = config.userRoles;
export const facebookAppId = config.facebook.appId;
export const facebookRedirectUrl = config.facebook.redirectUrl;
export const instagramAppId = config.instagram.appId;
export const instagramRedirectUrl = config.instagram.redirectUrl;
export const loginUrl = config.twitter.loginUrl;
export const twitterRequestTokenUrl = config.twitter.requestTokenUrl;
export const vkAppId = config.vk.appId;
export const tinyMceApiKey = config.tinyMce.apiKey;
export const preferredLanguages = config.preferred_languages;
export const currencies = config.currencies;
export const defaultCurrency = config.default_currency;
export const defaultFilePath = config.defaultFilePath;
export const resolutionBreakpoints = config.resolutionBreakpoints;
export const resolutionBreakpointsTwoItems = config.resolutionBreakpointsTwoItems;
export const webSocketUrl = config.webSocketUrl;
export const webSocketName = config.webSocketName;

export default config;