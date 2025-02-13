import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './redusers/data';
import paginationSlice from './redusers/pagination-gamelist';


export const store = configureStore({
    reducer: {
      dataSlice: dataSlice,
      paginationSlice: paginationSlice,
  
    },
});