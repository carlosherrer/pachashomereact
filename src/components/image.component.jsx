import React, { useState } from 'react';
import data from '../json/img.json';

const ImageComponent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/public/chanchoooo.jpg')" }}></div>
        
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        
        <div className="absolute grid grid-cols-1 gap-4 py-4 px-96">
            {data.map((item) => (
              <div key={item.id} className="grid grid-cols-2 p-2 rounded-lg bg-white cursor-pointer" onClick={() => openModal(item)}>
                <div className="flex justify-end items-center">
                  <img src={item.imglink} className="w-[100%] rounded-lg" alt={item.name} />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        
        {modalOpen && selectedItem && (
          <div className="fixed inset-0 z-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
            <div className="bg-white z-90 p-6 rounded-lg shadow-lg w-[700px]">
                <div className="gap-4 grid grid-cols-2">
                  {selectedItem.morelinks.map((link, index) => (
                    <iframe 
                      key={index} 
                      className="w-full h-48 rounded-lg" 
                      src={link} 
                      allowFullScreen>
                    </iframe>
                  ))}
                </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer mt-4" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
};

export default ImageComponent;
