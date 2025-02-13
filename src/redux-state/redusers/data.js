import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gamesList: [],
    selectedGame: {},

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

        resetData: () => initialState
    }
});

export const { changeGamesList, changeSelectedGame, resetData } = dataSlice.actions;
export default dataSlice.reducer;