import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, img, price, shipping, quantity } = props.product
    return (
        <div className='review-item'>
            <h3>This is a review item: {name}</h3>
        </div>
    );
};

export default ReviewItem;