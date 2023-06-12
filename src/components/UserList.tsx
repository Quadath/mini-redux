import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../features/fetchUsers";
import { useAppDispatch } from "../hooks";
import { useDispatch } from "react-redux";

export const UserList = () => {

    const {users, error, loading} = useTypedSelector(state => state.user) 
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {users?.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}