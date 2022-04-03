import React from 'react';
import useCart from '../../hooks/UseCart';
import useProducts from '../../hooks/UseProducts';
import Cart from '../Cart/Cart'

const Orders = () => {
    const [products, handleProducts] = useProducts();
    const [cart, handleCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className="products-container">

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;