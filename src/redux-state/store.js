import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './redusers/data';
import paginationSlice from './redusers/pagination-gamelist';
import filtersSlice from './redusers/filters';
import scrollSlice from './redusers/scroll';


export const store = configureStore({
    reducer: {
      dataSlice: dataSlice,
      paginationSlice: paginationSlice,
      filtersSlice: filtersSlice,
      scrollSlice: scrollSlice,
  
    },
});