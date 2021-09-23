import {TranslatePlaceholderData, TranslateProps} from "react-localize-redux";

import Translation from "atoms/Translation";
import React from "react";
import {languages} from "client/config";


export const translation = (id: string, data?: TranslatePlaceholderData): TranslateProps => {
    return {id, data}
};

export const supportsLanguage = (lang: string) => {
    const langSupported = languages.filter((language: any) => {
        return language.code === lang;
    });

    return langSupported.length > 0;
};

export const placeOrPlaces = (amount: number): string => {
    const lastDigit = amount % 10;

    if (lastDigit === 1 && amount !== 11) {
        return 'place';
    }

    return 'places';
};

export const packageOrPackages = (amount: number): string => {
    const lastDigit = amount % 10;

    if (lastDigit === 1 && amount !== 11) {
        return 'package';
    }

    return 'packages';
};

export const generateNotificationTyperanslation = (type: number) => {
    const translated = ['common.notifications_type', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateRoutePackageStatusTranslation = (status: string) => {
    const translated = ['common.route_package_statuses', status].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateRoutePackageRejectModerationTranslation = (reason: string, data?: any) => {
    const translated = ['common.route_package_reject_moderation_options', reason].join('.');

    return <Translation source={translation(translated, data)}/>
};

export const generateBanUserTranslation = (reason: string, data?: any) => {
    const translated = ['common.ban_user_options', reason].join('.');

    return <Translation source={translation(translated, data)}/>
};

export const generateUnBanUserTranslation = (reason: string, data?: any) => {
    const translated = ['common.unban_user_options', reason].join('.');

    return <Translation source={translation(translated, data)}/>
};

export const generateRouteTypeTranslation = (type: string) => {
    const translated = ['common.route_types', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateRouteOrganizationTypeTranslation = (type: string) => {
    const translated = ['common.route_organization_types', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateLanguageTranslation = (language: string) => {
    const translated = ['common.languages', language].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateComfortTypesTranslation = (type: string) => {
    const translated = ['common.comfort_types', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateActivityTypesTranslation = (type: string) => {
    const translated = ['common.activity_types', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateTagsTranslation = (type: string) => {
    const translated = ['common.tags', type].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateCurrencyTranslation = (currency: string) => {
    const translated = ['common.currencies', currency].join('.');

    return <Translation source={translation(translated)}/>
};

export const generateCountryTranslation = (country: string) => {
    const countryFormatted = country.split(' ').join('_').toLowerCase();

    const translated = ['common.countries', countryFormatted].join('.');

    return <Translation source={translation(translated)}/>
};

export const getContinentsTranslationString = (continent: string) => {
    return ['common.continents', continent].join('.');
};

export const generateContinentsTranslation = (continent: string) => {
    return <Translation source={translation(getContinentsTranslationString(continent))}/>
};

export const generateUserRoleTranslation = (role: string) => {
    const translated = ['common.user_roles', role].join('.');

    return <Translation source={translation(translated)}/>
};