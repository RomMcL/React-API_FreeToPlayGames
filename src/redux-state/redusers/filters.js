import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowFilters: true,
    platform: "all",
    genre: "all",
    sort: "alphabetical",
}

export const filtersSlice = createSlice({
    name: 'filtersSlice',
    initialState,
    reducers: {
        changeisShowFilters: (state, action) => {
            state.isShowFilters = action.payload;
        },
        changePlatform: (state, action) => {
            state.platform = action.payload;
        },
        changeGenre: (state, action) => {
            state.genre = action.payload;
        },
        changeSort: (state, action) => {
            state.sort = action.payload;
        },


        resetFilters: () => initialState
    }
});

export const { changeisShowFilters, changePlatform, changeGenre, changeSort, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;