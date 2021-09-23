import React from 'react';

import Header from "common/components/atoms/Header";
import Logo from 'common/components/atoms/Logo/index';
import MainMenu from "elements/menus/MainMenu";

interface IProps {
    classes?: string,
    withSearch?: boolean
}

function HeaderBlock(props: IProps) {
    const classes = ['site-header', props.classes].join(' ');

    return <Header id="masthead" classes={classes}>
        <div className='header-content-wrapper'>
            <div className="site-branding">
                <Logo classes='custom-logo-link'/>
            </div>
            <MainMenu/>
        </div>
    </Header>
}

export default HeaderBlock;
