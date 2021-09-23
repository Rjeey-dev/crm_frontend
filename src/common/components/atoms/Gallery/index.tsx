import React from "react";
// @ts-ignore
import ImageGallery from 'react-image-gallery';

import {IProps} from "./interfaces";

const Gallery = (props: IProps) => {
    const classes = ['gallery'];

    if (props.classes) {
        classes.push(props.classes);
    }

    return <ImageGallery onErrorImageURL='/static/images/preloader.gif' items={props.images} className={classes.join(' ')} useBrowserFullscreen={true} autoPlay={true} lazyLoad={true}/>
};

export default Gallery;