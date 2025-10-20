import React from 'react';
import { useSelector } from 'react-redux';

const CounterOutput2 = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Counter 2: {count}</h1>
    </div>
  );
};

export default CounterOutput2;
    