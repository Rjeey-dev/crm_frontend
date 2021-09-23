import React, {ReactNode, ReactNodeArray} from "react";

interface IProps {
    href?: string,
    attributes?: object,
    id?: string,
    classes?: string,
    children?: ReactNodeArray | ReactNode,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    omMouseHover?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

function Link(props: IProps) {
    return <a
        onClick={props.onClick}
        onMouseOver={props.omMouseHover}
        onMouseOut={props.onMouseOut}
        href={props.href}
        id={props.id}
        className={props.classes}
        {...props.attributes}>
            {props.children}
            </a>
}

Link.defaultProps = {
    href: '#'
};

export default Link