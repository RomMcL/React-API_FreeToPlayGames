import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gamesList: [],
    selectedGame: {},
    isLoading: false,
    error: {},
    message: '',
    sanctions: false,

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
        changeSanctions: (state, action) => {
            state.sanctions = action.payload;
        },

        resetData: () => initialState
    }
});

export const { changeGamesList, changeSelectedGame, changeLoadingStatus, 
    changeError, changeMessage, changeSanctions, resetData } = dataSlice.actions;
export default dataSlice.reducer;