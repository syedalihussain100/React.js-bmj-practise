import { combineReducers } from "redux";

import TodoReducer from "./TodoReducer";

const rootreducer = combineReducers({
    TodoReducer: TodoReducer,
});

export default rootreducer;