import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/addCartReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    addCart: cartReducer,
    todo: todoReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
