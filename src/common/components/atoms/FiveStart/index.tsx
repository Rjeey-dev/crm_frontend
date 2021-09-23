import React, {Component} from "react";
import Rating from "react-rating";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {IProps} from "./interfaces";

class FiveStar extends Component<IProps> {
    render() {
        const readonly = this.props.readonly ? this.props.readonly : false;

        return <Rating className='rating-block-widget'
            initialRating={this.props.input.value}
            readonly={readonly}
            onChange={this.props.input.onChange}
            emptySymbol={<FontAwesomeIcon icon={faStar} className='empty'/>}
            fullSymbol={<FontAwesomeIcon icon={faStar} className='full'/>}
            fractions={2}
        />;
    }
}

export default FiveStar;

