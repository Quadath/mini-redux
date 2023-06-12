import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserAction, UserActionTypes } from "../types/user";

interface UserState {
    users: IUser[]
    loading: boolean
    error: null | string
}
interface IUser {
    id: number
    name: string
    username: string
    phone: string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS: 
        return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS: 
            return {loading: false, error: null, users: action.payload}
            case UserActionTypes.FETCH_USERS_ERROR: 
            return {loading: false, error: action.payload, users: []}
        default: 
            return state
    }
}


export const selectCount = (state: RootState) => state.counter.value
