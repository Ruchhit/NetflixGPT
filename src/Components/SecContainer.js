import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecContainer = () => {
  const movies = useSelector((store) => store.movies); // getting movies from the store

  return (
    <>
      {(movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies) && (
        <div className="bg-black">
          <div className="mt-[-130px] relative z-10">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          </div>
        </div>
      )}
    </>
  );
};

export default SecContainer;
