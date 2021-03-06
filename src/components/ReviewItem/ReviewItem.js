import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, faTrashAlt } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, removeFromCart }) => {
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img className='product-img' src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p className='orange-colour'>Price: <span>{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => removeFromCart(product)} className='delete-btn'>
                        <FontAwesomeIcon className='trash-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;