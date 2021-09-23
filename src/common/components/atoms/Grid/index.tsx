import React from 'react';
import Masonry from 'react-masonry-css';

import {IProps} from "./interfaces";

export default function Grid(props: IProps) {
    return <Masonry
        breakpointCols={props.breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {props.children}
    </Masonry>
};