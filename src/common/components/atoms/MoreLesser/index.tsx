import React, {Component, FormEvent} from "react";

import {IProps} from "./interfaces";
import Span from "atoms/Span";
import Translation from "atoms/Translation";
import {translation} from "services/common/translations";

class MoreLesser extends Component<IProps> {
    public state = {
        open: false
    };

    private renderButton = (shouldBeLessed: boolean) => {
        if (!shouldBeLessed) {
            return '';
        }

        const text = this.state.open ? 'common.less' : 'common.more';

        return <Span classes='more-less' onClick={this.handleClick}><Translation source={translation(text)}/></Span>;
    };

    private handleClick = (event: FormEvent<HTMLSpanElement>) => {
        event.preventDefault();

        this.setState({
            open: !this.state.open
        })
    };

    render() {
        let text = '';
        const shouldBeLessed = this.props.text.length > this.props.lessLength;

        if (!shouldBeLessed) {
            text = this.props.text;
        } else {
            text = this.state.open ? this.props.text : this.props.text.slice(0, this.props.lessLength) + '...';
        }

        return <Span classes='more-less-block'>
            {text}
            {this.renderButton(shouldBeLessed)}
        </Span>;
    }
}

export default MoreLesser;