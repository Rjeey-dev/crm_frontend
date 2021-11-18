import {FormEvent} from "react";

export interface IProps {
    handleClick?: (event: FormEvent<HTMLButtonElement>) => void,
    handleClose: (event: FormEvent<HTMLButtonElement>) => void,
    isOpen: boolean,
    classes?:string,
    overlayClasses?:string,
    children: any,
    withoutButtons?: boolean
}