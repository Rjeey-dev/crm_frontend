import {ReactNode, ReactNodeArray} from "react";

export interface IProps {
    children: ReactNode | ReactNodeArray,
    classes?: string,
}