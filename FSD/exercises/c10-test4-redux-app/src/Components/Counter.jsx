import React, { useState } from 'react';
import CounterOutput from './CounterOutput';
import CounterButton from './CounterButton';

const Counter = () => {
  return (
    <div className="container text-center mt-5">
      <CounterOutput />
      <CounterButton />
    </div>
  );
};

export default Counter;
