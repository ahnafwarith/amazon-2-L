import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/UseCart';
import useProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, handleProducts] = useProducts();
    const [cart, handleCart] = useCart(products);
    const removeFromCart = (product) => {
        // Here, we are selecting the rest of the items and setting those items to state
        const restItems = cart.filter(pd => pd.id !== product.id)
        handleCart(restItems)
        // deleting from local storage
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} removeFromCart={removeFromCart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Proceed to inventory</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;