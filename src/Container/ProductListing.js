import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProduct } from '../Redux/action/productAction';

const ProductListing = () => {
    const products = useSelector( state => state);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios 
        .get("https://fakestoreapi.com/products")
        .catch( err => {
            console.log('error', err)
        });
        dispatch(setProduct(response.data));
    };

    useEffect( () => {
        fetchProducts();
    }, []);
    console.log('Products', products);
    return (
        <div className="container">
        <div className="row row-cols-3">
            <ProductComponent />
        </div>
        </div>
    );
};

export default ProductListing;