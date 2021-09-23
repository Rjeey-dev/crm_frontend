import lodash from "lodash";
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/ru';
import {TranslateProps} from "react-localize-redux";

export const TODAY = 'Today';
export const YESTERDAY = 'Yesterday';

import {defaultLanguage} from 'client/config';
import {translation} from "services/common/translations";

export interface IRange {
    start_date: any
    end_date: any
}

export interface IDatePickerRange {
    startDate: any
    endDate: any
}

export interface ISelection {
    selection: IDatePickerRange
}

export const dayAgoForTranslation = (date: string): TranslateProps => {
    let args = {
        amount: 0
    };
    const data = lodash.split(dayAgo({date}), ' ');

    if (!Number.isNaN(Number(data[0]))) {
        args = {
            amount: Number(data[0])
        };
        data.shift();
    }

    return translation('common.dates.' + data.join('_'), args);
};

export const dayAgo = (parameters: { date: string, lang?: string }): string => {
    const {date, lang = defaultLanguage} = parameters;

    moment.locale(lang);

    return moment(new Date(date)).fromNow();
};

export const currentDate = (): string => {
    return moment().utcOffset("+00:00").toISOString();
};

export const getHoursMinutes = (date: string): string => {
    return moment(date).format('LT');
};

export const getDay = (date: Date): string => {
    return moment(date).format('D');
};

export const getFullDate = (date: string): string => {
    return moment(date).format('LLLL');
};

export const getDateRange = (dateStart: Date, dateEnd: Date): string => {
    return [moment(dateStart).format('MM/DD/YYYY'), moment(dateEnd).format('MM/DD/YYYY')].join(' - ');
};

export const getDateRangeType1 = (dateStart: Date, dateEnd: Date, lang: string): string => {
    moment.locale(lang);

    return [moment(dateStart).format('D MMMM, YYYY'), moment(dateEnd).format('D MMMM, YYYY')].join(' - ');
};

export const getDateType1 = (date: Date, lang: string): string => {
    moment.locale(lang);

    return moment(date).format('HH:mm, D MMMM, YYYY');
};

export const getDateType2 = (date: Date, lang: string): string => {
    moment.locale(lang);

    return moment(date).format('D MMMM, YYYY');
};

export const getDateType3 = (date: Date, lang: string): string => {
    moment.locale(lang);

    return moment(date).format('D MMMM, YYYY');
};

export const sortByDateDesc = (objects: any[]) => {
    return objects.sort(function compare(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // @ts-ignore
        return dateB - dateA;
    });
};

export const getDayOrDays = (amount: number): string => {
    const lastDigit = amount % 10;

    if (lastDigit === 1) {
        return 'a_day';
    }

    return 'days';
};

export const getDateOrDates = (amount: number): string => {
    const lastDigit = amount % 10;

    if (lastDigit === 1) {
        return 'date';
    }

    return 'dates';
};

export const formatRangeDate = (range: IDatePickerRange, locale: string): string => {
    moment.locale(locale);

    const startDay = moment(range.startDate);
    const endDay = moment(range.endDate);

    if (!startDay.isSame(endDay, 'year')) {
        return [startDay.format('MMM D YYYY'), endDay.format('MMM D YYYY')].join(' - ');
    } else {
        if (!startDay.isSame(endDay, 'month')) {
            return [
                [startDay.format('MMM D'), endDay.format('MMM D')].join(' - '),
                startDay.format('YYYY')
            ].join(', ');
        } else {
            return [
                [
                    startDay.format('MMM'),
                    [startDay.format('D'), endDay.format('D')].join(' - '),
                ].join(' '),
                startDay.format('YYYY')
            ].join(', ');
        }
    }
};

export const formatDate = (date: Date, locale: string): string => {
    moment.locale(locale);

    const date1 = moment(date);

    return date1.format('MMM D YYYY');
};

export const formatDateDMMYYYY = (date: Date, locale: string): string => {
    moment.locale(locale);

    const date1 = moment(date);

    return date1.format('D.MM.YYYY');
};

export const formatDateDMMYYYYWithDetails = (date: Date, locale: string): string => {
    moment.locale(locale);

    const date1 = moment(date);

    return date1.format('MMM D YYYY LT');
};

export const getDateFromDateRangeDateFormat = (date: string | object): Date => {
    return typeof(date) === "string" ? new Date(date) : date as Date;
};

export const isDateBetweenDates = (date: any, left: any, right: any): boolean => {
    const leftDate = moment(left);
    const rightDate = moment(right);
    const dateCompare = moment(date);

    return dateCompare >= leftDate && dateCompare <= rightDate;
};

export const getDateStart = (date: any): Date => {
    if (date.hasOwnProperty('dates')) {
        return date.dates.date_start;
    }

    return date.date_start;
};

export const getDateEnd = (date: any): Date => {
    if (date.hasOwnProperty('dates')) {
        return date.dates.date_end;
    }

    return date.date_end;
};