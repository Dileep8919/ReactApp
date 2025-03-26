import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
  </div>
  )
}

export default App;
