import React, { useState } from 'react';

const Ubication = ({ showMap, toggleMap }) => {
  return (
    <div className="flex justify-end p-4 fixed bottom-10 right-5 z-[9999]">
      
      {/* Contenedor del Mapa */}
      <div
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 bg-white transition-all duration-500 p-2 rounded-2xl shadow-lg text-center w-auto min-w-[250px] flex items-center justify-center pointer-events-auto 
          ${showMap ? 'max-h-[300px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
      >
        <a
          href="https://www.google.com/maps/place/Pachas+Parrillas/@-11.9406079,-76.6971813,17z/data=!3m1!4b1!4m6!3m5!1s0x9105ef0050a3ce39:0xe002f69987d9f08c!8m2!3d-11.9406079!4d-76.6946064!16s%2Fg%2F11y7rbyqx9?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            width="250"
            height="250"
            style={{ border: 0, pointerEvents: 'none' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=-11.9406079,-76.6946064&hl=es&z=17&output=embed"
          ></iframe>
        </a>
      </div>

      {/* Botón para Mostrar/Ocultar Mapa */}
      <div
        onClick={toggleMap}
        className="flex max-w-[250px] gap-2 bg-red-600 p-4 rounded-2xl justify-center items-center text-white font-semibold text-lg cursor-pointer min-w-[250px]"
      >
        <p>Ubicación</p>
      </div>
    </div>
  );
};

export default Ubication;
