import {TranslateProps} from "react-localize-redux";

export interface IOption {
    label: TranslateProps,
    value: number
}

export interface IProps {
    input: any,
    placeholder?: any,
    name?: string,
    options: IOption[],
    isDisabled?: boolean,
    classes?: string,
    isMulti?: boolean,
    isCreatable?: boolean,
    defaultValue?: number,
    label: TranslateProps
}