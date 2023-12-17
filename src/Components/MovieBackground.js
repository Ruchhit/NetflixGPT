 
import {  useSelector } from 'react-redux';
import useGetMovieVideoes from '../hooks/useGetMovieVideoes';
 

const MovieBackground = ({movieId}) => {
   
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideo);

    useGetMovieVideoes(movieId);
  return (
    <div>
        <iframe  className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1 "} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default MovieBackground

// ?&autoplay=1&mute=1