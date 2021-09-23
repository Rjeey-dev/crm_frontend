import React from 'react';

import Nav from "atoms/Nav";
import ListItem from 'common/components/atoms/ListItem/index';
import List from 'common/components/molecules/List/index';
import HeaderUserMenu from "elements/menus/HeaderUserMenu";

export default function MainMenu() {
    return <div className='menu-wrapper'>
        <Nav>
            <List classes='primary-menu'>
                <ListItem classes='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children user'>
                    <HeaderUserMenu/>
                </ListItem>
            </List>
        </Nav>
    </div>
}