import React, { useEffect, useState } from 'react';
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
            <div className="col-10">
                <div className="row p-5">
                    {
                        products.map(product=><Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="col-2">This Cart Aria</div>
        </div>
    );
};

export default Shop;