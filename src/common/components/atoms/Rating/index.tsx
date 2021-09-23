import React, {Component} from "react";

import Span from "atoms/Span";
import {IProps} from "./interfaces";
import FiveStar from "atoms/FiveStart";
import Translation from "atoms/Translation";
import {translation} from "services/common/translations";

class Rating extends Component<IProps> {
    render() {
        const {rating, reviewsAmount} = this.props;

        let ratingClass = ['rating-score-block'];

        if (rating === 5) {
            ratingClass.push('excellent');
        } else if (rating >= 4.2 && rating < 5) {
            ratingClass.push('well');
        } else if (rating >= 3.5 && rating < 4.2) {
            ratingClass.push('good');
        } else if (rating >= 1.5 && rating < 3.5) {
            ratingClass.push('bad');
        } else if (rating === 0) {
            ratingClass.push('not-reviewed');
        } else {
            ratingClass.push('terrible');
        }

        return <div className={ratingClass.join(' ')}>
            <div className='upper'>
                <Span classes='rating-score'>{rating.toFixed(1)}</Span>
                <FiveStar input={{value: rating}} readonly={true}/>
            </div>
            {reviewsAmount !== undefined && <Span classes='reviews-amount'>(<Translation source={translation('common.amount_reviews', {amount: reviewsAmount})}/>)</Span>}
        </div>
    }
}

export default Rating;