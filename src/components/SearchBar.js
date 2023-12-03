import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWordDetails } from '../services/api';
import { setWordDetails, addSearchToHistory } from '../reducers/dictionaryReducer.js';
import Loader from "./Loader";
// import { useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
//   const history = useNavigate(); // Initialize useHistory

  const handleSearch = async () => {
    try {
        setLoading(true); // Set loading to true on search start
      const wordDetails = await fetchWordDetails(searchTerm);
      dispatch(setWordDetails(wordDetails));
      dispatch(addSearchToHistory(searchTerm)); // Dispatch action to add search term to history
    //   history.push('/search-history'); // Navigate to Search History page after search
    } catch (error) {
      // Handle error
    }finally{
        setLoading(false); // Set loading to true on search start
    }
  };

  return (
    <div className="wrapper" >
      <input
        type="text"
        className='searchBox'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className='searchButton'>Search</button>
      {loading && <Loader />}
    </div>
  );
};

export default SearchBar;
