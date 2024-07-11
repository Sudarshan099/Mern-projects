import { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  const decreament = () => {
    setCount(count-1)
  }
  
  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decreament}>Decrease</button>
    </div>
  );
}
