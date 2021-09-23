import {LocalizeContextProps, TranslateProps} from "react-localize-redux";

export interface IProps extends LocalizeContextProps {
    source: TranslateProps,
}