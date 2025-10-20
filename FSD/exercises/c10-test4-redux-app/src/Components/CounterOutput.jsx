import React from 'react';
import { useSelector } from 'react-redux';

const CounterOutput = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default CounterOutput;
    