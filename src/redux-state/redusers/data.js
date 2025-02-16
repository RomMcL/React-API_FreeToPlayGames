import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gamesList: [],
    selectedGame: {},
    isLoading: false,
    error: {},
    message: '',

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
        changeMessage: (state, action) => {
            state.message = action.payload;
        },

        resetData: () => initialState
    }
});

export const { changeGamesList, changeSelectedGame, changeLoadingStatus, changeError, changeMessage, resetData } = dataSlice.actions;
export default dataSlice.reducer;