import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    classes?: string,
    children: ReactNodeArray | ReactNode,
}

function Column(props: IProps) {
    return <div className={props.classes}>
        {props.children}
    </div>;
}

Column.defaultProps = {
    classes: 'col-sm-9'
};

export default Column;