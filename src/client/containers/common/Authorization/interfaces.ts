import {ReactNode} from "react";

export interface IStateToProps {
    userRole: string,
}

export interface IProps {
    userRole: string,
    run: string,
    on: string,
    children: ReactNode,
    match: any,
}