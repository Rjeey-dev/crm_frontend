import React from 'react';
import ReactPlayer from 'react-player';

import {IProps} from "./interfaces";

function Video(props: IProps) {
    return <div className='video-wrapper'>
        <ReactPlayer url={props.video.source} controls={true} width='100%'/>
    </div>;
}

export default Video;
