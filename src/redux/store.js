import {createStore, applyMiddleware} from 'redux'
import logger from 'redux'
import promiseMiddleware from "redux"
import rootReducer from './reducers'
export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware, logger)
)