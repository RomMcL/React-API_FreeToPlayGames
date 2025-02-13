import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gamesList: [],
    selectedGame: {},
    isLoading: false,
    error: {},

}

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        changeGamesList: (state, action) => {
            state.gamesList = action.payload;
        },
        changeSelectedGame: (state, action) => {
            state.selectedGame = action.payload;
        },
        changeLoadingStatus: (state, action) => {
            state.isLoading = action.payload;
        },
        changeError: (state, action) => {
            state.error = action.payload;
        },

        resetData: () => initialState
    }
});

export const { changeGamesList, changeSelectedGame, changeLoadingStatus, changeError, resetData } = dataSlice.actions;
export default dataSlice.reducer;