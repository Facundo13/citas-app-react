import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mt-5 md:mt-0'>
      {pacientes && pacientes.length ?
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl text-center mt-5 mb-10'>Administra tus <span className='text-indigo-600 font-bold'>pacientes y citas</span></p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}

        </>
        :
        <>
          <h2 className='font-black text-3xl text-center'>Todavia no tienes pacientes</h2>
          <p className='ml-5 text-xl text-center mt-5 mb-10'>Agrega tus pacientes <span className='text-indigo-600 font-bold'>y aparecerán aquí</span></p>
        </>}

    </div>
  )
}

export default ListadoPacientes