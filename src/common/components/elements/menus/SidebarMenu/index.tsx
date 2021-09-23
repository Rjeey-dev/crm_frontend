import React from 'react';

import Nav from "atoms/Nav";
import Span from "atoms/Span";
import Translation from "atoms/Translation";
import ListItem from 'common/components/atoms/ListItem/index';
import List from 'common/components/molecules/List/index';
import {
    URL_DASHBOARD,
} from "common/routes/paths";
import LocalizedLink from "containers/links/LocalizedLink";
import {translation} from "services/common/translations";

export default function SidebarMenu() {
    return <div className='menu-wrapper'>
        <Nav>
            <List classes='primary-menu'>
                <ListItem classes='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children user'>
                    <LocalizedLink exact={true} to={URL_DASHBOARD}>
                        <Span classes='bold'><Translation source={translation('menus.dashboard')}/></Span>
                    </LocalizedLink>
                </ListItem>
                {/*<ListItem classes='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children user'>
                    <LocalizedLink exact={true} to={URL_REVIEWS}>
                        <Span><Translation source={translation('menus.reviews')}/></Span>
                    </LocalizedLink>
                </ListItem>*/}
            </List>
        </Nav>
    </div>
}