import {
    getTranslate,
    LocalizedElement,
    LocalizedElementMap,
    TranslateProps,
    TranslateValue
} from "react-localize-redux";
import {IState} from "store/translations/interfaces";

export const getTranslation = (state: IState, text: TranslateProps): string | LocalizedElementMap | LocalizedElement => {
    const translate = getTranslate(state.localize);

    return translate(text.id as TranslateValue, text.data);
};