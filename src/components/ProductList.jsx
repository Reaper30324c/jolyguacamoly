import React from 'react';
import { products } from '../data/products';

const ProductList = () => (
    <section className="productList">
        <h2>Productos</h2>
        <div className="productListContainer">
            {products.map((product, index) => (
                <div className="productCard" key={index}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price.toFixed(0)}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ProductList;
