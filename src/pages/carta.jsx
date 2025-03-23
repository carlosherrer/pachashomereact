import React from 'react'
import Navbar from '../components/navbar'

const Carta = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="flex w-screen">
            <iframe 
                src="/menu.pdf#zoom=67" 
                className="w-screen h-screen"
              title="Carta del Restaurante"
            />
      </div>
    </div>
  )
}

export default Carta
