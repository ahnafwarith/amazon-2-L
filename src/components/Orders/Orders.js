import React from 'react';
import useCart from '../../hooks/UseCart';
import useProducts from '../../hooks/UseProducts';

const Orders = () => {
    const [products, handleProducts] = useProducts();
    const [cart, handleCart] = useCart(products);
    console.log(cart)
    return (
        <div>
            <h1>This is orders: {products.length}</h1>
        </div>
    );
};

export default Orders;