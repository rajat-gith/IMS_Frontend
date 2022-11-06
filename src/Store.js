import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools, createwithDevTools} from 'redux-devtools-extension'
import { productListReducers } from './reducers/productReducers'
import { storeListReducers } from './reducers/storeReducers'


const reducer=combineReducers({
    productList:productListReducers,
    storeList:storeListReducers,
})
const initialState={}

const middleware=[thunk]
const store= createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store