
import React from 'react';
import { useDispatch } from 'react-redux';

const CounterButton = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button onClick={increment} className="btn btn-primary">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default CounterButton;

