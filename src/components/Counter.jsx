import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
console.log('rerender');
  const incrementHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  const resetButton = count !== 0 && (
    <button onClick={resetHandler}>reset</button>
  );


  return (
    <div>
      <h1> {count} </h1>
      <button onClick={incrementHandler} disabled={count === 20}>
        increment
      </button>
      {resetButton}
    </div>
  );
};
