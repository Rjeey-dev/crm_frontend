import React, {Component, FormEvent} from "react";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Span from "atoms/Span";
import Translation from "atoms/Translation";
import {translation} from "services/common/translations";
import {IProps} from "./interfaces";

class Hider extends Component<IProps> {
    public state = {
        open: false
    };

    private renderButton = () => {
        const text = this.state.open ? this.props.hideText : this.props.showText;
        const icon = this.state.open ? faMinusCircle : faPlusCircle;

        return <Span classes='hider' onClick={this.handleClick}>
            <Span classes='icon'><FontAwesomeIcon icon={icon}/></Span>
            <Span classes='text'><Translation source={translation(text)}/></Span>
        </Span>;
    };

    private handleClick = (event: FormEvent<HTMLSpanElement>) => {
        event.preventDefault();

        this.setState({
            open: !this.state.open
        })
    };

    render() {
        const element = this.state.open ? this.props.children : '';

        return <Span classes='hider-block'>
            {element}
            {this.renderButton()}
        </Span>;
    }
}

export default Hider;