import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Movies from './components/Movies';
import Popup from './components/Popup';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1197de4a`;
    await axios.get(url).then((res) => {
      const movies = res.data.Search;
      if (movies) {
        setMovies(movies);
      }
    });
    console.log(movies);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className='container'>
      <h1>WatchFlixDB</h1>
      <p>Find your favourite movies</p>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Popup trigger={false}>
        <h3>My popup</h3>
      </Popup>
      <Movies movies={movies} />
    </div>
  );
};

export default App;
