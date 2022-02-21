import React from 'react'

const Paciente = () => {
  return (
    <div>
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='font-normal normal-case'>Hook</span></p>
          
          <p className='font-bold mb-3 text-gray-700 uppercase'>Dueño: <span className='font-normal normal-case'>Facundo</span></p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Email: <span className='font-normal normal-case'>Facundo@correo.com</span></p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: <span className='font-normal normal-case'>10/09/2022</span></p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nobis, necessitatibus ipsam quod perspiciatis voluptatum at a, consequatur harum officiis debitis dolores deserunt labore maxime cupiditate, exercitationem aliquid maiores! Ea!</span></p>

        </div>
    </div>
  )
}

export default Paciente