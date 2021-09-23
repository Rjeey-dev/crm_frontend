import {History} from "history";
import {ReactNode, ReactNodeArray} from "react";
import {RouteComponentProps} from "react-router";

export interface IProps extends RouteComponentProps {
    classes: string,
    children: ReactNode | ReactNodeArray,
    history: History
}