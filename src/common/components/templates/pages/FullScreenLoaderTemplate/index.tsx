import React from 'react';

import Translation from "atoms/Translation";
import {translation} from "services/common/translations";
import {IProps} from "./interfaces";

const FullScreenLoaderTemplate = (props: IProps) => {
    return <div className='preloader-wrapper'>
        <div className="loader"/>
        <div className="shadow"/>
        <div className="redirecting">
            <Translation source={translation('common.authenticating')}/>
        </div>
        <div className='auth-wrapper'>
            {props.children}
        </div>
    </div>
};

export default FullScreenLoaderTemplate;