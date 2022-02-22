import React from 'react'

const Error = ({children}) => {
    return (
        <div className='mb-5 bg-red-700 text-white text-center font-bold p-3 uppercase'>
            <p>{children}</p>
        </div>)
}

export default Error