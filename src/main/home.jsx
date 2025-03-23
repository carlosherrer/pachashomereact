import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepachas from '../pages/home.pachas';
import Carta from '../pages/carta';
import Eventos from '../pages/eventos';
import Blog from '../pages/blog';

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepachas />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default Home;
