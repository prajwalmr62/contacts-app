/**
 * @author prajwalmr62
 * creates and exposes store.
 */

// dependency import
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import combiner reducer.
import reducers from "./reducer";

// get middleware array
const middleWares = [thunk, createLogger({diff: true})];

// export the store. 
export default createStore(reducers, compose(applyMiddleware(...middleWares)));