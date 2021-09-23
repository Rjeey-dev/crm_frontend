import React, {CSSProperties, FormEvent} from 'react';
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
    src: string,
    classes?: string,
    alt?: string,
    title?: string,
    width?: number,
    height?: number,
    onClick?: (event: FormEvent<HTMLImageElement>) => void,
    attributes?: () => void,
    style?: CSSProperties,
    lazyLoad?: boolean
}

function Img(props: IProps) {
    const lazyLoad = props.hasOwnProperty('lazyLoad') ? props.lazyLoad : true;
    const {classes, src, alt, title, width, height, onClick, style} = props;

    const options = {
        className: classes,
        src,
        alt,
        title,
        width,
        height,
        onClick,
        style
    };

    if (lazyLoad) {
        return <LazyLoadImage placeholderSrc='/static/images/preloader.gif' effect="blur" {...props.attributes} {...options}/>
    }

    return <img {...props.attributes} {...options}/>;
}

export default Img;
