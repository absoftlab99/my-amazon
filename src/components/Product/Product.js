import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img, price, ratings, seller} = props.product;
    return (
            <div className="col-4 mb-3">
                <div className="card rounded-4">
                    <img src={img} className="card-img-top p-3 rounded-5" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">Price: ${price}</h6>
                        <small>Manufacturer: {seller}</small><br></br>
                        <small>Ratings: {ratings}</small>
                    </div>
                    <div className="">
                        <button className='btn btn-lg btn-warning w-100 rounded-0'>Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
    );
};

export default Product;