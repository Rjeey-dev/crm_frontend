import {ReactNode} from "react";

export interface IStateProps {
    userRole: string,
}

export interface IProps {
    userRole: string,
    run: string,
    on: string,
    children: ReactNode
}