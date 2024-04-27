// Search.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncSearchGames } from '../redux/utils/gameUtils';
import { selectSearchResults, selectSearchStatus } from '../redux/store/gameSlice';
import Results from './Results';

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncSearchGames(searchTerm));
  };

  return (
    <div className="game-search">
      <h1>Game Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <br />
        <input type="submit" value="Search" />
      </form>
      {searchStatus === 'loading' && <p>Loading...</p>}
      {searchStatus === 'succeeded' && searchResults.length > 0 && (
        <Results gameResults={searchResults} />
      )}
      {searchStatus === 'succeeded' && searchResults.length === 0 && (
        <p>No results found</p>
      )}
      {searchStatus === 'failed' && <p>Failed to load search results</p>}
    </div>
  );
};

export default Search;
