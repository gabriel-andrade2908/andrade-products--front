import React from 'react';
import { Login} from '../login.tsx'
import { Products} from '../products.tsx'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
};
export default App;
