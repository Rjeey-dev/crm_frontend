import {
    URL_DENIED, URL_FAILED_LOGIN,
    URL_NOT_FOUND,
} from "common/routes/paths";

const Metatags = {};

Metatags[URL_DENIED] = {
    title: 'metatags.titles.denied',
    description: 'metatags.descriptions.denied',
    keywords: 'metatags.keywords.denied',
    page_title: 'menus.denied',
};

Metatags[URL_FAILED_LOGIN] = {
    title: 'metatags.titles.failed_login',
    description: 'metatags.descriptions.failed_login',
    keywords: 'metatags.keywords.failed_login',
    page_title: 'menus.failed_login',
};

Metatags[URL_NOT_FOUND] = {
    title: 'metatags.titles.not_found',
    description: 'metatags.descriptions.not_found',
    page_title: 'menus.not_found',
    keywords: 'metatags.keywords.not_found',
};

export default Metatags;