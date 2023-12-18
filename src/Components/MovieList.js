import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    console.log(movies);
  return (
   
    <div>
     <h1 className='text-white font-bold text-2xl p-2 pl-6 pt-4'>{title}</h1>
     <div className='cursor-pointer flex overflow-auto no-scrollbar '>
        <div className='flex p-4'>
            {movies.map((movie)=>
            (
                <MovieCard key={movie.id} poster_path={movie.poster_path}/>
            ))
            }
        </div>
     </div>
   
     </div>
  )
}

export default MovieList