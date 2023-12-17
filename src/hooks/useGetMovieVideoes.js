import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useGetMovieVideoes = (movieId) => {
    const dispatch = useDispatch();
   
    const getMainMovieTrailer = async() =>{
        const trailer = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+ '/videos?language=en-US', options);
        const json = await trailer.json();
        console.log(json); // we get several videoes but we r only concerned with "title":"trailer"
        
        const filteredData = json.results.filter((video)=> video.type === "Trailer");
        console.log(filteredData); // we r getting 4 trailers
        
        const finalTrailer = filteredData[1];
        console.log(finalTrailer)
        
        dispatch(addTrailerVideo(finalTrailer));
       }
       useEffect(()=>{
        getMainMovieTrailer();
       },[])
  return (
    <div>useGetMovieVideoes</div>
  )
}

export default useGetMovieVideoes