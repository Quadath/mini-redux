import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, increment } from './features/counterSlice';

function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
