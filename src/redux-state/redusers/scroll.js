import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scroll: 0,

}

export const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        changeScroll: (state, action) => {
            state.scroll = action.payload;
        },

        resetScroll: () => initialState
    }
});

export const { changeScroll, resetScroll } = scrollSlice.actions;
export default scrollSlice.reducer;