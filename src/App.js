import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [Advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{Advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>this is your number {count} Advice</p>
    </div>
  );
}
export default App;
