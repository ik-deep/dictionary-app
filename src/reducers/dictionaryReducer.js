// Existing code...
import { createSlice } from '@reduxjs/toolkit';

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState: {
      wordDetails: null,
      searchHistory: [], // Add searchHistory to the initial state
      // other state variables
    },
    reducers: {
      setWordDetails: (state, action) => {
        state.wordDetails = action.payload;
      },
      addSearchToHistory: (state, action) => {
        state.searchHistory = [...state.searchHistory, action.payload];
      },
      // other action reducers
    },
  });
  
  export const { setWordDetails, addSearchToHistory } = dictionarySlice.actions;
  
  export const selectWordDetails = (state) => state.dictionary.wordDetails;
  export const selectSearchHistory = (state) => state.dictionary.searchHistory;
  
  export default dictionarySlice.reducer;
  