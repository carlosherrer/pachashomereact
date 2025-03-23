// Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='bg-[#ae9a64] flex justify-center gap-10 py-6 text-xl'>
        <h1 onClick={() => navigate('/')} className='cursor-pointer text-[#323232] tracking-wide hover:text-white transition-colors duration-300 font-bold'>Inicio</h1>
        <h1 onClick={() => navigate('/carta')} className='cursor-pointer text-[#323232] tracking-wide hover:text-white transition-colors duration-300 font-bold'>Carta</h1>
        <h1 onClick={() => navigate('/eventos')} className='cursor-pointer text-[#323232] tracking-wide hover:text-white transition-colors duration-300 font-bold'>Eventos</h1>
        <h1 onClick={() => navigate('/blog')} className='cursor-pointer text-[#323232] tracking-wide hover:text-white transition-colors duration-300 font-bold'>Blog</h1>
      </div>
      <div className="bg-[#323232]">
        <div className="py-1 flex justify-center">
          <p className="text-[#ae9a64] text-sm font-roboto italic">Sauce Grande Bajo Mz.K Lt.5 Tel. +51-964-289-904</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
