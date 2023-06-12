import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, increment, incrementByValue } from './store/reducers/counterSlice';
import { fetchUsers } from './features/fetchUsers';
import './App.css';
import { UserList } from './components/UserList';

function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [inc, setInc] = useState(1);

  const handleSubmit = (e : any) => {
    dispatch(incrementByValue(inc))
    setInc(0)
    e.preventDefault()
  }

  return (
    <div className="App">
      {/* <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Count</label>
        <input type='number' value={inc} onChange={(e) => setInc(parseInt(e.target.value))}/>
        <input type='submit' value="Submit"/>
      </form> */}
    <UserList/>


    </div>
  );
}

export default App;
