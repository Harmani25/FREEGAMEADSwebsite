import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncSearchGames } from '../redux/utils/gameUtils';
import SearchModal from './SearchModal';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const searchResults = useSelector((state) => state.game.searchResults);

  console.log(searchResults)

  const handleSearch = () => {
    dispatch(fetchAsyncSearchGames(query));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <input className='searchinput'
        type="text"
        placeholder="Search for games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button className='searchgamebtn' onClick={handleSearch}>Search</button>

      {showModal && (
        <SearchModal results={searchResults} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SearchComponent;
