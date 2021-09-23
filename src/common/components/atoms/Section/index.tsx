import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    children: ReactNodeArray | ReactNode,
    classes?: string,
}

export default function Section(props: IProps) {
    return <section className={props.classes}>
        {props.children}
    </section>;
}