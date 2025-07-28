import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepachas from '../pages/home.pachas';
import Carta from '../pages/carta';
import Eventos from '../pages/eventos';
import Pedidos from '../pages/pedidos';

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepachas />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/pedidos" element={<Pedidos />} />
    </Routes>
  );
};

export default Home;
