import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from '../ProductList/Product';

const ProductList = ( ) => {

    const [products, setProducts] = useState([]);

    const fetchData = () => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;