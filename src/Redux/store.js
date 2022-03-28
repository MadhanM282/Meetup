import { loginReducer } from "./Login/loginReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(loginReducer,applyMiddleware(thunk)); // add your reducers here

