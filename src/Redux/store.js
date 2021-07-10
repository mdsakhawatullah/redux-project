import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './Reducer/productReducer';


const combineReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export const store = createStore(combineReducer, composeWithDevTools())