import { useState } from 'react';
import './App.css';
import Header from './compnents/header/Header';
import Home from './compnents/home/Home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header count={count} setCount={setCount} />
      <Home count={count} setCount={setCount} />
    </div>
  );
}

export default App;
