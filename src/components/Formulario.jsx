import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente}) => {

    const [nombre, setNombre] = useState('');
    const [duenio, setDuenio] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);



    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // Validacion del form  
        if ([nombre, duenio, email, alta, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        // Objeto paciente
        const objetoPaciente = {
            nombre,
            duenio,
            email,
            alta,
            sintomas,
            id:generarId()
        }

        setPacientes([...pacientes, objetoPaciente]);

        setNombre('');
        setDuenio('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }


    
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade los pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>
                <div className='mb-5'>

                    {error && <Error>Por favor, completa todos los campos</Error> }

                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
                    <input id="mascota" type="text" placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="dueño" className='block text-gray-700 uppercase font-bold'>Nombre dueño</label>
                    <input id="dueño" type="text" placeholder='Nombre del dueño' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={duenio} onChange={(e) => setDuenio(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="Email" className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input id="Email" type="email" placeholder='Email contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
                    <input id="Alta" type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={alta} onChange={(e) => setAlta(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea id="sintomas" placeholder='Describe los sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
                </div>
                <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value="Agregar paciente"></input>
            </form>
        </div>


    )
}

export default Formulario