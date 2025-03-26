import './App.css';
import { useEffect } from 'react';

function App() {
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
