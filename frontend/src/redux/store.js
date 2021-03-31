import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducers } from './reducers/productReducers';

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducers,
	getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
