import React, {ReactNode} from "react";

interface IProps {
    children: ReactNode,
}

export default function ContentTemplate(props: IProps) {
    return <div className="container-fluid page-body-wrapper">
        {props.children}
    </div>
}