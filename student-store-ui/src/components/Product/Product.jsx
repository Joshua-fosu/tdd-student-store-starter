import React from 'react';
import './Product.css'

function Product({product}) {
    return (
        <div className='product_container'>
            <div className='product_img_container'>
            <img src={product.image} alt="" srcset="" className='product_img'/>
            </div>
            <div>
                <p>{product.name}</p>
                <p>${product.price}</p>

            </div>
            
            
        </div>
    );
}

export default Product;