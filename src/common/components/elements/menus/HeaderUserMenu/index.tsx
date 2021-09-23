import React, {Component} from 'react';

import {
    ABILITY_LOGOUT_LINK,
    ABILITY_SEE
} from "client/ability";
import LogOutLink from 'client/containers/links/LogOut/index';
import Ability from "containers/common/Ability";

interface IProps {
    classes?: string
}

class HeaderUserMenu extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleOver = this.handleOver.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleOver(event: any) {
        event.preventDefault();

        this.openBlock();
    }

    public handleOut(event: any) {
        event.preventDefault();
        const wrapper = document.getElementById('dropdown-menu-user-menu');

        if (wrapper) {
            wrapper.classList.remove('active');
        }
    }

    public handleClick(event: any) {
        event.preventDefault();

        this.openBlock();
    }

    private openBlock() {
        const wrapper = document.getElementById('dropdown-menu-user-menu');

        if (wrapper) {
            wrapper.classList.add('active');
        }
    }

    public render() {
        return <div className='menu-item-wrapper' onClick={this.handleClick} onMouseOver={this.handleOver} onMouseLeave={this.handleOut}>
            <div className="dropdown-menu" id='dropdown-menu-user-menu'>
                <Ability run={ABILITY_SEE} on={ABILITY_LOGOUT_LINK}>
                    <LogOutLink/>
                </Ability>
            </div>
        </div>
    }
}

export default HeaderUserMenu;