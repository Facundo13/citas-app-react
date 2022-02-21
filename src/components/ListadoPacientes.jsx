import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mt-5 md:mt-0'>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl text-center mt-5 mb-10'>Administra tus <span className='text-indigo-600 font-bold'>y citas</span></p>

        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
    </div>
  )
}

export default ListadoPacientes