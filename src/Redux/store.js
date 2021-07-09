import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,combineReducers} from 'redux';
import { productReducer } from './Reducer/productReducer';
import { selectedProduct } from './action/productAction';

const combineReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProduct
})

export const store = createStore(combineReducer, composeWithDevTools())