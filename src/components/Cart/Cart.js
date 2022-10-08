import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart col-2 bg-warning position-fixed end-0 p-3 rounded-4'>
            <h5 className='text-center fw-bold'>Order Summery</h5>
            <hr />
            <p><small>Selected Items:</small></p>
            <p><small>Total Price:</small></p>
            <p><small>Total Shipping Charge:</small></p>
            <p><small>Tax:</small></p>
            <p className='fw-bold'>Grand Total:</p>

            <button className='btn w-100'>Clear Cart</button>
        </div>
    );
};

export default Cart;