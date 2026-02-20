import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePayment from './pages/CreatePayment';
import Payment from './pages/Payment';
import Loading from "./pages/Loading";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePayment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;

