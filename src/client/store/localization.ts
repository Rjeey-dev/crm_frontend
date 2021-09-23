import { renderToStaticMarkup } from "react-dom/server";
import {addTranslationForLanguage, initialize} from 'react-localize-redux';
import {Store} from "redux";

import {defaultLanguage, languages} from 'client/config';
import {supportsLanguage} from "services/common/translations";
import {getUserLang} from "store/users/selectors";
import globalDeTranslations from "../translations/de";
import globalEnTranslations from "../translations/en";
import globalRuTranslations from "../translations/ru";

const configureLocalization = (store: Store) => {
    store.dispatch(initialize({
        languages,
        options: {
        defaultLanguage: resolveLocale(store),
        renderToStaticMarkup
        }
    }));

    store.dispatch(addTranslationForLanguage(globalEnTranslations, 'en'));
    store.dispatch(addTranslationForLanguage(globalDeTranslations, 'de'));
    store.dispatch(addTranslationForLanguage(globalRuTranslations, 'ru'));
};

const resolveLocale = (store: Store): string => {
    const state = store.getState();
    const userLang = getUserLang(state);
    const location = state.router.location.pathname;

    if (!location || !userLang) {
        return defaultLanguage;
    }

    const path = location.split('/');
    const routeLang = path[1];

    if (supportsLanguage(routeLang)) {
        return routeLang;
    }

    return userLang;
};

export default configureLocalization;