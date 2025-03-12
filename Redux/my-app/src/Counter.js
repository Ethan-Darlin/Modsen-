// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Счётчик: {count}</h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
      <button onClick={() => dispatch(reset())}>Сбросить</button>
    </div>
  );
};

export default Counter;