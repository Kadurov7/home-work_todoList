import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {authSlice, authReducer } from "./auth/authSlice"
import {todoSlice, todoReducer} from "./todo/todoSlice"

const rootReducer = combineReducers({
    [todoSlice.name]: todoReducer,
    [authSlice.name]: authReducer,
});

export const store = configureStore({reducer: rootReducer})