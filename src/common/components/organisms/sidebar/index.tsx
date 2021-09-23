import React from 'react';

import SidebarMenu from "elements/menus/SidebarMenu";

interface IProps {
    classes?: string,
    withSearch?: boolean
}

function Sidebar(props: IProps) {
    return <nav className='sidebar'>
        <SidebarMenu/>
    </nav>
}

export default Sidebar;
