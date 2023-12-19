 import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecContainer from './SecContainer';
const Browse = () => {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (
    
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>) : (<><MainContainer/><SecContainer/></>)}
    </div>
 
  )
}

export default Browse