import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 p-2 '>
        <img alt='movie' src={IMG_CDN_URL+poster_path} className='hover:scale-[1.1] rounded-lg'/>
    </div>
  )
}

export default MovieCard