import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const doubleItem = () => {
    setItem(item * 2);
  };

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <hr />

      <h1>Number : {item}</h1>

      <button onClick={doubleItem}>
        Double Item
      </button>
    </div>
  );
}

export default Counter;