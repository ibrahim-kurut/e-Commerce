import { useState } from 'react';
import './App.css';
import Header from './compnents/header/Header';
import Home from './compnents/home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Header count={count} setCount={setCount} />
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/product/:id" element={<ProductDetails count={count} setCount={setCount} />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
