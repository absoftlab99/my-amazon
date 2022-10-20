import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart col-2 bg-dark position-fixed end-0 p-3 rounded-4'>
            <h5 className='text-center fw-bold text-light'>Order Summery</h5>
            <hr className='text-light' />
            <p className='text-light'><small>Selected Items: </small></p>
            <p className='text-light'><small>Total Price:</small></p>
            <p className='text-light'><small>Total Shipping Charge:</small></p>
            <p className='text-light'><small>Tax:</small></p>
            <p className='text-light fw-bold'>Grand Total:</p>

            <button className='mt-3 btn btn-danger w-100'>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
            <button className='mt-3 btn btn-warning w-100'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            
        </div>
    );
};

export default Cart;