import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.pachas.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Ubication from '../components/ubitaction';

const Homepachas = () => {

  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className='bg-[#ae9a64] overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#fee5ca]">
        
        <div className="relative bg-black">
          <div className="parallax" style={{ backgroundImage: "url('Mariachis.JPG')" }}>
            <div className="image-overlay"></div>
            <div className="absolute inset-0 flex flex-col justify-center text-center items-center text-white gap-14 md:gap-4">
              <p className="text-6xl md:text-8xl font-bold hover:text-red-600 tracking-tighter">PACHAS PARRILLAS</p>
              <p className="text-4xl font-semibold tracking-widest">EL SABOR DE GENERACIONES</p>
              <div className="bg-[#ae9a64] hover:bg-[#323232] text-white hover:text-[#ae9a64] inline-block px-14 py-2 rounded-md">
                <p className="text-3xl font-bold tracking-wider cursor-pointer" onClick={() => navigate('/carta')}>Carta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-black">
          <div className="parallax2" style={{ backgroundImage: "url('comida-restaurante.jpg')" }}>
            <div className="image-overlay2"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-4">
              <p className="text-3xl md:text-6xl md:mb-0 mb-12 font-bold tracking-widest text-[#ae9a64]">EL RESTAURANTE</p>
              <div className="sm:flex hidden justify-around w-full mt-10 text-center px-12">
                
                <div className="grid gap-8 w-11/12">
                  <div className="gap-8 grid text-white">
                    <p className="font-bold text-3xl">TRADICIONAL PARRILLA, CON UN TOQUE MODERNO</p>
                    <p className="px-14 lg:flex hidden">Respetamos las raíces de la parrilla tradicional, combinando lo mejor de lo auténtico con un toque de innovación moderna. Cada plato está diseñado para ofrecer una experiencia inolvidable.</p>
                    <p className="px-10 lg:hidden sm:flex hidden">Respetamos las raíces de la parrilla tradicional, combinando lo mejor de lo auténtico con un toque de innovación moderna.</p>
                  </div>
                </div>
                
                <div className="grid gap-8 w-11/12">
                  <div className="gap-8 grid text-white">
                    <p className="font-bold text-3xl">LO MEJOR EN PARRILLA A LA LEÑA</p>
                    <p className="px-6 lg:flex hidden">Cada corte de carne es cuidadosamente preparado sobre brasas de leña seleccionada, aportando un sabor ahumado inigualable. La combinación perfecta de fuego y tradición, donde la calidad de nuestros ingredientes se realza con el aroma y el calor de las llamas.</p>
                    <p className="px-6 lg:hidden sm:flex hidden">Cada corte de carne es cuidadosamente preparado sobre brasas de leña seleccionada, aportando un sabor ahumado inigualable.</p>
                  </div>
                </div>
                
                <div className="grid gap-8 w-11/12">
                  <div className="gap-8 grid text-white">
                    <p className="font-bold text-3xl">SITUADO DONDE COMENZÓ TODO</p>
                    <p className="px-6 lg:flex hidden">En este lugar se forjaron nuestras primeras brasas y nació nuestra pasión por la parrilla. Cada rincón cuenta una historia, y cada plato honra el legado que hemos construido con esfuerzo y dedicación. Aquí, donde comenzó todo.</p>
                    <p className="px-6 lg:hidden sm:flex hidden">Cada rincón cuenta una historia, y cada plato honra el legado que hemos construido con esfuerzo y dedicación. Aquí, donde comenzó todo.</p>
                  </div>
                </div>

              </div>
              <div className='sm:hidden flex flex-col text-center sm:gap-20 gap-8 sm:px-20 px-6'>
                <div>
                  <p className="font-bold text-3xl">TRADICIONAL PARRILLA, CON UN TOQUE MODERNO</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">LO MEJOR EN PARRILLA A LA LEÑA</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">SITUADO DONDE COMENZÓ TODO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex hidden gap-10 justify-center py-12 z-0">
          {["delivery.jpg", "recojo-tienda.jpg", "festividades.jpg", "reservas.jpg"].map((image, index) => (
            <div key={index} className="img-container relative rounded-md">
              <img src={image} alt={image.split('.')[0]} className="hover-img" />
              <div className="overlay-text absolute inset-0 flex items-center justify-start">
                <div>
                  <p className="text-white text-2xl font-bold text-shadow px-6">
                    {["Delivery", "Recojo en Tienda", "Festividades", "Reservas"][index]}
                  </p>
                  <div className="flex px-6 py-2 bg-red-700 rounded-r-md">
                    <p className="text-white text-sm">
                      {["Para disfrutar desde el hogar", "Listo para recoger", "Celebra con nosotros", "Reserva con anticipación"][index]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div>
        </div>
      </div>
        <Ubication showMap={showMap} toggleMap={toggleMap}/>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Homepachas;
