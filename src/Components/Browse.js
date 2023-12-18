 import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecContainer from './SecContainer';
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (
    
    <div>
      <Header/>
      <MainContainer/>
      <SecContainer/>
    </div>
 
  )
}

export default Browse