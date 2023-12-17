import React from 'react'
import { useSelector } from 'react-redux'
import MovieBackground from './MovieBackground';
import MovieTitle from './MovieTitle';

const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

    const{id , title , overview} = mainMovie;


  return (
    <div className='relative '>
        <MovieTitle title={title} overview={overview}/>
        <MovieBackground movieId={id}/>
    </div>
  )
}

export default MainContainer