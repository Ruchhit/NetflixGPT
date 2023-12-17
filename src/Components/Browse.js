 import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecContainer from './SecContainer';
const Browse = () => {
    useNowPlayingMovies();

  return (
    
    <div>
      <Header/>
      <MainContainer/>
      <SecContainer/>
    </div>
 
  )
}

export default Browse