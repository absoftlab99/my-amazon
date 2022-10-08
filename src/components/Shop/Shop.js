import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
        const [products, setProducts] = useState([]);
        useEffect( () => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        }, [])
    return (
        <div className='row'>
            <div className="col-10 p-0">
                <div className="row p-5 mt-5">
                    {
                        products.map(product=><Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="col-2 p-0 position-relative mt-5 pt-5">
                <div className="row">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;