import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='absolute p-10 w-screen aspect-video  bg-gradient-to-r from-black bg-opacity-90 pt-[30%]  '>
        <h1 className='text-white font-bold font-sans text-3xl'>{title}</h1>
        <p className='text-white w-1/4 '>{overview}</p>
        <div>
            <button className='text-white font-medium bg-slate-500 p-2 px-4 py-2 m-2 rounded-lg cursor-pointer'>Play</button>
            <button className='text-white font-medium bg-slate-500 p-2 px-4 py-2 m-2 rounded-lg cursor-pointer'>More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle