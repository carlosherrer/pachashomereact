import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+51964289904&text=Hola,%20con%20Pachas%20Parrillas,%20quisiera%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-4 py-3 rounded-2xl cursor-pointer"
    >
      <FaWhatsapp size={24} />
      <span className='hidden lg:flex'>WhatsApp</span>
    </a>
  );
};

export default Whatsapp;
