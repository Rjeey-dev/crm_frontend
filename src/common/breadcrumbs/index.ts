import {
    ABILITY_FAILED_LOGIN_LINK,
    ABILITY_HOME_LINK,
    ABILITY_NOT_FOUND_LINK,
} from "client/ability";
import {
    URL_FAILED_LOGIN,
    URL_HOME_LOCALIZED,
    URL_NOT_FOUND,
} from "common/routes/paths";

const Breadcrumbs = {};

Breadcrumbs[URL_FAILED_LOGIN] = [
    {
        link: URL_HOME_LOCALIZED,
        text: 'menus.home',
        ability_name: ABILITY_HOME_LINK
    },
    {
        link: URL_FAILED_LOGIN,
        text: 'menus.failed_login',
        ability_name: ABILITY_FAILED_LOGIN_LINK
    },
];

Breadcrumbs[URL_NOT_FOUND] = [
    {
        link: URL_HOME_LOCALIZED,
        text: 'menus.home',
        ability_name: ABILITY_HOME_LINK
    },
    {
        link: URL_NOT_FOUND,
        text: 'menus.not_found',
        ability_name: ABILITY_NOT_FOUND_LINK
    },
];

export default Breadcrumbs;