import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [num, setNum] = useState(0);
  function Inccrease(){
    setNum(num+1)
  }
  function decrease(){
    setNum(num-1)
  }
  return (
    <div className="body">
      <div className='main'>
      <h1>{num}</h1>
      <button onClick={Inccrease}>Inccrease</button>
      <button onClick={decrease}>Deccrease</button>
      </div>
    </div>
  );
}
