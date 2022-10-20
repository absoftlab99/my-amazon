import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Cart from '../Cart/Cart';
import './Product.css';

const Product = (props) => {
    let cartItems = 0;
    const addToCart = () =>{
        cartItems = cartItems + 1;
        console.log(cartItems);
    }
    const {id, name, img, price, ratings, seller} = props.product;
    return (
            <div className="col-3 mb-3">
                <div className="card rounded-4">
                    <img src={img} className="card-img-top p-3 rounded-5" alt="..."/>
                    <div className="card-body pt-0">
                        <h6 className="card-title"><b>{name}</b></h6>
                        <h6 className="card-title">Price: ${price}</h6>
                        <small>Manufacturer: {seller}</small><br></br>
                        <small>Ratings: {ratings}</small>
                    </div>
                    <div className="">
                        <button onClick={()=>addToCart(id)} className='btn btn-warning w-100 rounded-0'>Add to Cart <FontAwesomeIcon className='fa-bounce' icon={faCartShopping}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
    );
};

export default Product;