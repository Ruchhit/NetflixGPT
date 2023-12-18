 
import {  useSelector } from 'react-redux';
import useGetMovieVideoes from '../hooks/useGetMovieVideoes';
 

const MovieBackground = ({movieId}) => {
   
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideo);

    useGetMovieVideoes(movieId);
  return (
    <div className='w-screen mt-[-110px]'>
         <iframe
  className='w-screen aspect-video'
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

    </div>
  )
}

export default MovieBackground

// ?&autoplay=1&mute=1