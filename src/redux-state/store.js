import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './redusers/data';


export const store = configureStore({
    reducer: {
      dataSlice: dataSlice,
  
    },
});