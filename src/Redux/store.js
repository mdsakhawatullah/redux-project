import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,combineReducers} from 'redux';
import { productReducer } from './Reducer/productReducer';

const combineReducer = combineReducers({
    allProducts: productReducer,
})

export const store = createStore(combineReducer, composeWithDevTools())