import React from 'react';

interface IProps {
    classes: string,
    attributes?: object
}

function Icon(props: IProps) {
    return <i className={props.classes} {...props.attributes}/>;
}

export default Icon;
