import React from 'react';

const ReviewItem = (props) => {
    const { name } = props.product
    return (
        <div>
            <h3>Product name: {name}</h3>
        </div>
    );
};

export default ReviewItem;