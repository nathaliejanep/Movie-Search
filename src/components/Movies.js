import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Popup from './Popup';

const Movies = (props) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [buttonProp, setButtonProp] = useState(false);

  const getInfo = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=1197de4a`;
    await axios.get(url).then((res) => {
      setMovieInfo(res.data);
      console.log(movieInfo);
    });
  };

  return (
    <div className='movies-container'>
      {props.movies.map((movie, index) => (
        <div className='movie-item' key={index}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <button
            onClick={() => {
              setButtonProp(true);
              getInfo(movie.imdbID);
            }}
          >
            Plot
          </button>
          <Popup
            trigger={buttonProp}
            setTrigger={setButtonProp}
            movieInfo={movieInfo}
          >
            <h3>{movieInfo.Title}</h3>
            <img src={movieInfo.Poster} alt={movieInfo.Title} />
            <p>{movieInfo.Genre}</p>
            <p>{movieInfo.imdbRating}</p>
            <p>{movieInfo.Plot}</p>
          </Popup>
        </div>
      ))}
    </div>
  );
};
export default Movies;
