import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    pageSize: 10,
}

export const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        changeSize: (state, action) => {
            state.pageSize = action.payload;
        },

        resetPagination: () => initialState
    }
});

export const { changeCurrentPage, changeSize, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;