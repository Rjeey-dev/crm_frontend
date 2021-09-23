import React, { ReactNode } from 'react';

interface IProps {
    disabled: boolean,
    classes?: string,
    children?: ReactNode,
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    attributes?: object,
    type?: any
}

function Button(props: IProps) {
    return <button disabled={props.disabled} type={props.type} className={props.classes} onClick={props.handleClick} {...props.attributes}>
            {props.children}
        </button>;
}

Button.defaultProps = {
    disabled: false
};

export default Button;