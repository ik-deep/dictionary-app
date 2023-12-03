import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../reducers/dictionaryReducer.js';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});