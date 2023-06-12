import { combineReducers } from "@reduxjs/toolkit";
import {userReducer} from './usersSlice'
import counterReducer from './counterSlice'

export const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})
