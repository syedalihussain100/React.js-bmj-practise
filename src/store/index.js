import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import {logger} from 'redux-logger'

import rootreducer from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;