import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/action/productAction';

const ProductDetail = () => {
    const product = useSelector( state => state.product );
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetail = async() => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch( err => {
            console.log('error', err);
        })

        dispatch(selectedProduct(response.data));
    };
    useEffect( () => {
        if(productId && productId !== '') fetchProductDetail()
    },[productId])
    
    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    );
};

export default ProductDetail;