import React, {Component, FormEvent} from 'react';

import {IAccordionItem, IProps} from "./interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
import Span from "atoms/Span";

class Accordion extends Component<IProps> {
    public state = {
        open: [],
        initialized: []
    };

    constructor(props: IProps) {
        super(props);

        this.handleTogglerClick = this.handleTogglerClick.bind(this);
    }

    private handleTogglerClick = (event: FormEvent<HTMLSpanElement>) => {
        event.preventDefault();

        const index = event.currentTarget.getAttribute('data-index');

        if (!index) {
            return;
        }

        const open = this.state.open;
        const initialized = this.state.initialized;

        if (index in open) {
            open[index] = !open[index];
        } else {
            open[index] = true;
        }

        if (index in initialized) {

        } else {
            initialized[index] = true;
        }

        this.setState({
            ...this.state.open,
            ...this.state.initialized,
            open,
            initialized
        });
    };

    render() {
        const items = this.props.items.map((item: IAccordionItem, index: number) => {
            return this.renderItem(item, index);
        });

        return <div className='accordion'>
            {items}
        </div>;
    }

    private renderItem = (item: IAccordionItem, index: number) => {
        const downClasses = ['down'];
        const itemClasses = ['item'];

        if (index in this.state.open && this.state.open[index] === true) {
            downClasses.push('active');
            itemClasses.push('active');
        }

        if (index === 0) {
            itemClasses.push('first');
        } else if (index === this.props.items.length) {
            itemClasses.push('last');
        }

        return <div className={itemClasses.join(' ')} key={index}>
            <div className='up' onClick={this.handleTogglerClick} data-index={index}>
                <div className='item-wrapper'>
                    {item.up}
                </div>
                <Span classes='toggler'><FontAwesomeIcon icon={faChevronCircleDown}/></Span>
            </div>
            <div className={downClasses.join(' ')}>
                {this.state.initialized[index] && item.down}
            </div>
        </div>
    }
}

export default Accordion;
