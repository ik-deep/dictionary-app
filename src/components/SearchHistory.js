import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchHistory } from '../reducers/dictionaryReducer.js';

const SearchHistory = () => {
  
  const searchHistory = useSelector(selectSearchHistory);

  return (
    <div  className="searchBar">
      
      <ul>
        {searchHistory&&searchHistory.length>0?searchHistory.map((searchItem, index) => (
            <>
            <h2>Search History</h2>
            <li key={index}>{searchItem}</li>
            </>
     
        )):(<h1>search history not found!</h1>)}
      </ul>
    </div>
  );
};

export default SearchHistory;
